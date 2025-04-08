import React from 'react';

const showcaseProducts = [
  { id: 1, name: 'Canon EOS DSLR Camera', price: 360, image: '/images/camera.jpg' },
  { id: 2, name: 'ASUS HD Gaming Laptop', price: 1160, image: '/images/laptop.jpg' },
  { id: 3, name: 'CUrology Product Set', price: 180, image: '/images/skincare.jpg' },
  { id: 4, name: 'Kids Electric Car', price: 500, image: '/images/kidscar.jpg' },
  { id: 5, name: 'Jr. Zoom Soccer Cleats', price: 200, image: '/images/cleats.jpg' },
  { id: 6, name: 'GP11 Shooter USB Gamepad', price: 450, image: '/images/gamepad.jpg' },
  { id: 7, name: 'Quilted Satin Jacket', price: 750, image: '/images/jacket.jpg' },
];

export default function ProductShowcase() {
  return (
    <section className="p-6">
      <h2 className="text-xl font-semibold mb-4">🛍 Explore Our Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {showcaseProducts.map(product => (
          <div key={product.id} className="border p-4 rounded hover:shadow">
            <img src={product.image} alt={product.name} className="h-40 w-full object-contain" />
            <h3 className="mt-2">{product.name}</h3>
            <p className="text-red-500">${product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
