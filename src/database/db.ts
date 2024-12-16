import { initWasm } from "@vlcn.io/crsqlite-wasm";
import { Room, Booking } from './schema';

let db: any = null;

export const initDatabase = async () => {
  if (db) return db;
  
  const sqlite = await initWasm();
  db = await sqlite.open("guesthouse.db");
  
  // Enable foreign keys
  await db.exec("PRAGMA foreign_keys = ON;");
  
  // Create tables
  await db.exec(`
    CREATE TABLE IF NOT EXISTS rooms (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT NOT NULL,
      price REAL NOT NULL,
      image TEXT NOT NULL,
      maxGuests INTEGER NOT NULL,
      available BOOLEAN DEFAULT true
    );

    CREATE TABLE IF NOT EXISTS bookings (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      roomId INTEGER NOT NULL,
      checkIn TEXT NOT NULL,
      checkOut TEXT NOT NULL,
      guestName TEXT NOT NULL,
      guestEmail TEXT NOT NULL,
      guestPhone TEXT NOT NULL,
      numberOfGuests INTEGER NOT NULL,
      totalPrice REAL NOT NULL,
      status TEXT CHECK(status IN ('pending', 'confirmed', 'cancelled')) DEFAULT 'pending',
      createdAt TEXT DEFAULT CURRENT_TIMESTAMP,
      updatedAt TEXT DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (roomId) REFERENCES rooms (id)
    );
  `);

  return db;
};

export const getRooms = async (): Promise<Room[]> => {
  await initDatabase();
  const result = await db.execA("SELECT * FROM rooms;");
  return result[0] || [];
};

export const getAvailableRooms = async (checkIn: string, checkOut: string): Promise<Room[]> => {
  await initDatabase();
  const result = await db.execA(`
    SELECT * FROM rooms
    WHERE id NOT IN (
      SELECT roomId FROM bookings
      WHERE status = 'confirmed'
      AND (
        (checkIn <= ? AND checkOut > ?) OR
        (checkIn < ? AND checkOut >= ?) OR
        (checkIn >= ? AND checkOut <= ?)
      )
    )
  `, [checkOut, checkIn, checkOut, checkIn, checkIn, checkOut]);
  return result[0] || [];
};

export const createBooking = async (booking: Omit<Booking, 'id' | 'createdAt' | 'updatedAt'>): Promise<number> => {
  await initDatabase();
  const result = await db.execA(`
    INSERT INTO bookings (
      roomId, checkIn, checkOut, guestName, guestEmail,
      guestPhone, numberOfGuests, totalPrice, status
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    RETURNING id;
  `, [
    booking.roomId,
    booking.checkIn,
    booking.checkOut,
    booking.guestName,
    booking.guestEmail,
    booking.guestPhone,
    booking.numberOfGuests,
    booking.totalPrice,
    booking.status
  ]);
  
  return result[0][0].id;
};

export const getBooking = async (id: number): Promise<Booking | undefined> => {
  await initDatabase();
  const result = await db.execA("SELECT * FROM bookings WHERE id = ?;", [id]);
  return result[0]?.[0];
};

export const updateBookingStatus = async (id: number, status: Booking['status']): Promise<void> => {
  await initDatabase();
  await db.exec(
    "UPDATE bookings SET status = ?, updatedAt = CURRENT_TIMESTAMP WHERE id = ?",
    [status, id]
  );
};

export const getRoomAvailability = async (roomId: number, checkIn: string, checkOut: string): Promise<boolean> => {
  await initDatabase();
  const result = await db.execA(`
    SELECT COUNT(*) as count FROM bookings
    WHERE roomId = ?
    AND status = 'confirmed'
    AND (
      (checkIn <= ? AND checkOut > ?) OR
      (checkIn < ? AND checkOut >= ?) OR
      (checkIn >= ? AND checkOut <= ?)
    )
  `, [roomId, checkOut, checkIn, checkOut, checkIn, checkIn, checkOut]);

  return result[0][0].count === 0;
};