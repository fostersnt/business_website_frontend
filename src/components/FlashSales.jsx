import React from 'react';

const products = [
  { id: 1, name: "HAVIT HV-G92 Gamepad", price: 120, discount: 40, img: "/images/gamepad.jpg" },
  { id: 2, name: "AK-900 Keyboard", price: 960, discount: 35, img: "/images/keyboard.jpg" },
  { id: 3, name: "LCD Gaming Monitor", price: 1160, discount: 30, img: "/images/monitor.jpg" },
];

export default function FlashSales() {
  return (
    <section className="p-6">
      <h2 className="text-xl font-semibold mb-4">🔥 Flash Sales</h2>
      <div className="flex gap-6">
        {products.map(p => (
          <div key={p.id} className="border p-4 rounded">
            <img src={p.img} alt={p.name} className="w-full h-32 object-contain" />
            <h3 className="mt-2">{p.name}</h3>
            <p className="text-red-500">${(p.price * (1 - p.discount / 100)).toFixed(2)} <span className="line-through text-gray-400">${p.price}</span></p>
          </div>
        ))}
      </div>
    </section>
  );
}
