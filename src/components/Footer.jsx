import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white p-10 mt-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <h3 className="text-lg font-semibold">Exclusive</h3>
          <p>Get 10% off your first order</p>
          <input type="text" placeholder="Enter email" className="mt-2 p-2 w-full rounded" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Support</h3>
          <p>111 Bijoy sarani, Dhaka, BD</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Quick Link</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Download App</h3>
          <p>Save $3 with App New User Only</p>
          <div className="mt-2">
            <img src="/images/qrcode.png" alt="QR" className="w-20 mb-2" />
            <div className="flex gap-2">
              <img src="/images/playstore.png" className="w-24" />
              <img src="/images/appstore.png" className="w-24" />
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-400 mt-8">© Copyright Exclusive 2024. All rights reserved</p>
    </footer>
  );
}
