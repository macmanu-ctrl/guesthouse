import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RoomList from './components/RoomList';
import Amenities from './components/Amenities';
import BookingForm from './components/BookingForm';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <RoomList />
      <Amenities />
      <BookingForm />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;