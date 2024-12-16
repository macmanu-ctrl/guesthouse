import React from 'react';
import { rooms } from '../data/rooms';

const RoomList = () => {
  return (
    <section id="rooms" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Rooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <img 
                src={room.image} 
                alt={room.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{room.name}</h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Amenities:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {room.amenities.map((amenity, index) => (
                      <li key={index}>{amenity}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-indigo-600">${room.price}/night</span>
                  <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomList;