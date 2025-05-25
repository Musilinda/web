import React from 'react';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-600 to-purple-600 text-white text-center px-6">
      <div className="flex flex-col items-center">
        {/* Increased the size by 10% from w-40/h-40 to w-44/h-44 */}
        <div className="w-44 h-44 mb-6 rounded-full bg-white/30 p-1 shadow-lg overflow-hidden">
          <img 
            src="/conductor.jpg" 
            alt="Musilinda Mascot" 
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="flex items-center justify-center">
          <h1 className="text-5xl font-bold mb-4">Musilinda</h1>
          {/* Eighth notes icon */}
          <span className="text-4xl mb-4 ml-2" aria-hidden="true">♫</span>
        </div>
        <p className="text-xl max-w-xl mb-6">A music theory app that teaches by doing — sing, see, feel, and truly understand harmony.</p>
        <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full hover:bg-indigo-100 transition join-waitlist">
          Join the Early Access
        </button>
      </div>
    </section>
  );
}