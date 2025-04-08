import React from 'react';

const categories = [
  { label: 'Phones', icon: '📱' },
  { label: 'Computers', icon: '💻' },
  { label: 'SmartWatch', icon: '⌚' },
  { label: 'Camera', icon: '📷' },
  { label: 'Headphones', icon: '🎧' },
  { label: 'Gaming', icon: '🎮' },
];

export default function Categories() {
  return (
    <section className="p-6">
      <h2 className="text-xl font-semibold mb-4">📂 Browse by Category</h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map((cat, index) => (
          <div key={index} className="flex flex-col items-center border p-4 rounded hover:shadow">
            <div className="text-2xl mb-2">{cat.icon}</div>
            <p>{cat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
