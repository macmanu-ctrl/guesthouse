import React from 'react';
import { amenities } from '../data/amenities';

const Amenities = () => {
  return (
    <section id="amenities" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Amenities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="text-indigo-600 mr-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold">{amenity.title}</h3>
                </div>
                <p className="text-gray-600">{amenity.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Amenities;