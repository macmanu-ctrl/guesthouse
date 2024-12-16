import { DB } from '@vlcn.io/crsqlite-wasm';

export const runMigrations = async (db: DB) => {
  await db.exec("PRAGMA foreign_keys = ON;");
  
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
};