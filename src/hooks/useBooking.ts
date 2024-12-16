import { useState } from 'react';
import { createBooking, getRoomAvailability } from '../database';
import type { BookingFormData } from '../types/booking';

export const useBooking = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitBooking = async (formData: BookingFormData) => {
    try {
      setLoading(true);
      setError(null);

      const isAvailable = await getRoomAvailability(
        parseInt(formData.roomType),
        formData.checkIn,
        formData.checkOut
      );

      if (!isAvailable) {
        throw new Error('Room is not available for the selected dates');
      }

      const totalPrice = 299; // This should be calculated based on room type and duration

      const bookingData = {
        roomId: parseInt(formData.roomType),
        checkIn: formData.checkIn,
        checkOut: formData.checkOut,
        guestName: formData.name,
        guestEmail: formData.email,
        guestPhone: formData.phone,
        numberOfGuests: parseInt(formData.guests),
        totalPrice,
        status: 'pending' as const
      };

      const bookingId = await createBooking(bookingData);
      return bookingId;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    submitBooking,
    loading,
    error
  };
};