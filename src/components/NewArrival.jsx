import React from 'react';

export default function NewArrival() {
  return (
    <section className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-black text-white flex flex-col justify-between p-6 rounded">
        <h2 className="text-xl font-semibold mb-2">PlayStation 5</h2>
        <p>In Stock Now. Experience gaming like never before.</p>
        <button className="mt-4 bg-white text-black px-4 py-2 rounded">Shop Now</button>
      </div>
      <div className="bg-gray-100 p-6 flex flex-col justify-between rounded">
        <h2 className="text-xl font-semibold mb-2">Women's Collections</h2>
        <p>Featured fashion for modern women.</p>
        <button className="mt-4 bg-black text-white px-4 py-2 rounded">Shop Now</button>
      </div>
      <div className="flex flex-col gap-6">
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="font-semibold">Speakers</h3>
          <p>Audio that moves you.</p>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="font-semibold">Perfume</h3>
          <p>Luxury fragrances for every moment.</p>
        </div>
      </div>
    </section>
  );
}
