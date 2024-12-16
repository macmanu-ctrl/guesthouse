import React, { useState } from 'react';
import { Calendar, Users, CreditCard } from 'lucide-react';
import { BookingFormData } from '../types/booking';
import { useBooking } from '../hooks/useBooking';

const BookingForm = () => {
  const { submitBooking, loading, error } = useBooking();
  const [formData, setFormData] = useState<BookingFormData>({
    checkIn: '',
    checkOut: '',
    guests: '1',
    roomType: 'deluxe',
    name: '',
    email: '',
    phone: ''
  });
  const [successMessage, setSuccessMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const bookingId = await submitBooking(formData);
      setSuccessMessage(`Booking successful! Your booking ID is: ${bookingId}`);
      setFormData({
        checkIn: '',
        checkOut: '',
        guests: '1',
        roomType: 'deluxe',
        name: '',
        email: '',
        phone: ''
      });
    } catch (err) {
      // Error is handled by the hook
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setSuccessMessage('');
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Book Your Stay</h2>
          {error && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}
          {successMessage && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
              {successMessage}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Rest of the form remains the same */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition-colors ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Processing...' : 'Book Now'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};