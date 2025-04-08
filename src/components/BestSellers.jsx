import React from 'react';

const products = [
  { id: 1, name: 'The north coat', price: 260, image: '/images/coat.jpg' },
  { id: 2, name: 'Gucci Leather bag', price: 960, image: '/images/bag.jpg' },
  { id: 3, name: 'RGB Liquid CPU Cooler', price: 1160, image: '/images/cooler.jpg' },
  { id: 4, name: 'Small Bookshelf', price: 360, image: '/images/shelf.jpg' },
];

export default function BestSellers() {
  return (
    <section className="p-6">
      <h2 className="text-xl font-semibold mb-4">🔥 Best Selling Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map(product => (
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
