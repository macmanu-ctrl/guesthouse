import { DB } from '@vlcn.io/crsqlite-wasm';
import { Room } from '../schema';
import { getConnection } from '../connection';

export const getRooms = async (): Promise<Room[]> => {
  const db = await getConnection();
  const result = await db.execO<Room>("SELECT * FROM rooms;");
  return result;
};

export const getRoomAvailability = async (
  roomId: number, 
  checkIn: string, 
  checkOut: string
): Promise<boolean> => {
  const db = await getConnection();
  const result = await db.execO<{count: number}>(`
    SELECT COUNT(*) as count FROM bookings
    WHERE roomId = ?
    AND status = 'confirmed'
    AND (
      (checkIn <= ? AND checkOut > ?) OR
      (checkIn < ? AND checkOut >= ?) OR
      (checkIn >= ? AND checkOut <= ?)
    )
  `, [roomId, checkOut, checkIn, checkOut, checkIn, checkIn, checkOut]);

  return result[0].count === 0;
};