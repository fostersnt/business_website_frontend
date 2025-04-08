import React from 'react';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 border-b">
      <div className="text-xl font-bold">Exclusive</div>
      <ul className="flex gap-6">
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
        <li>Sign Up</li>
      </ul>
      <div className="flex items-center gap-4">
        <input type="text" placeholder="Search" className="border rounded px-2 py-1" />
        <span>❤️</span>
        <span>🛒</span>
      </div>
    </nav>
  );
}
