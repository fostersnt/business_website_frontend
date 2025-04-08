import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-black text-white p-10 flex justify-between items-center">
      <div>
        <h2 className="text-2xl mb-4">Up to 10% off Voucher</h2>
        <button className="bg-white text-black px-4 py-2 rounded">Shop Now</button>
      </div>
      <img src="http://localhost:5000/images/uploads/website_banner.jpg" alt="iPhone" className="banner_image" />
    </section>
  );
}
