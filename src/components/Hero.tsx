import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome to Serenity Haven</h1>
          <p className="text-xl md:text-2xl mb-8">Experience luxury and comfort in the heart of nature</p>
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-md text-lg hover:bg-indigo-700 transition-colors">
            Book Your Stay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;