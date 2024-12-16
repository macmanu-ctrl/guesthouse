import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start">
              <MapPin className="w-6 h-6 text-indigo-600 mt-1" />
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-gray-600">123 Serenity Lane<br />Mountain View, CA 94043</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="w-6 h-6 text-indigo-600 mt-1" />
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="w-6 h-6 text-indigo-600 mt-1" />
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600">info@serenityhaven.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Clock className="w-6 h-6 text-indigo-600 mt-1" />
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">Hours</h3>
                <p className="text-gray-600">
                  Check-in: 3:00 PM - 10:00 PM<br />
                  Check-out: 11:00 AM
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6282711668897!2d-122.0838544!3d37.4219999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7495bec0189%3A0x7c17d44a466baf9b!2sMountain+View%2C+CA!5e0!3m2!1sen!2sus!4v1625097721238!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;