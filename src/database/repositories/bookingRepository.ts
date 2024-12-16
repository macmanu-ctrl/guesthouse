import { DB } from '@vlcn.io/crsqlite-wasm';
import { Booking } from '../schema';
import { getConnection } from '../connection';

export const createBooking = async (
  booking: Omit<Booking, 'id' | 'createdAt' | 'updatedAt'>
): Promise<number> => {
  const db = await getConnection();
  const result = await db.execO<{id: number}>(`
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
  
  return result[0].id;
};

export const getBooking = async (id: number): Promise<Booking | undefined> => {
  const db = await getConnection();
  const result = await db.execO<Booking>(
    "SELECT * FROM bookings WHERE id = ?;",
    [id]
  );
  return result[0];
};

export const updateBookingStatus = async (
  id: number, 
  status: Booking['status']
): Promise<void> => {
  const db = await getConnection();
  await db.exec(
    "UPDATE bookings SET status = ?, updatedAt = CURRENT_TIMESTAMP WHERE id = ?",
    [status, id]
  );
};