import { z } from 'zod';

export const RoomSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  image: z.string(),
  maxGuests: z.number(),
  available: z.boolean()
});

export const BookingSchema = z.object({
  id: z.number(),
  roomId: z.number(),
  checkIn: z.string(),
  checkOut: z.string(),
  guestName: z.string(),
  guestEmail: z.string(),
  guestPhone: z.string(),
  numberOfGuests: z.number(),
  totalPrice: z.number(),
  status: z.enum(['pending', 'confirmed', 'cancelled']),
  createdAt: z.string(),
  updatedAt: z.string()
});

export type Room = z.infer<typeof RoomSchema>;
export type Booking = z.infer<typeof BookingSchema>;