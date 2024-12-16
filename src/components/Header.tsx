import React from 'react';
import { Menu, X, Home, Calendar, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Home className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-semibold text-gray-800">Serenity Haven</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-indigo-600">Home</a>
            <a href="#rooms" className="text-gray-600 hover:text-indigo-600">Rooms</a>
            <a href="#amenities" className="text-gray-600 hover:text-indigo-600">Amenities</a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600">Contact</a>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700">
              Book Now
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-600 hover:text-indigo-600">Home</a>
              <a href="#rooms" className="text-gray-600 hover:text-indigo-600">Rooms</a>
              <a href="#amenities" className="text-gray-600 hover:text-indigo-600">Amenities</a>
              <a href="#contact" className="text-gray-600 hover:text-indigo-600">Contact</a>
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700">
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;