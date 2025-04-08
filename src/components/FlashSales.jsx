import React, { useEffect, useState } from "react";
import { getProducts } from "../api/Products";
import "../styles/FlashSales.css";
import { motion } from 'framer-motion';

// const products = [
//   { id: 1, name: "HAVIT HV-G92 Gamepad", price: 120, discount: 40, img: "/images/gamepad.jpg" },
//   { id: 2, name: "AK-900 Keyboard", price: 960, discount: 35, img: "/images/keyboard.jpg" },
//   { id: 3, name: "LCD Gaming Monitor", price: 1160, discount: 30, img: "/images/monitor.jpg" },
// ];

export default function FlashSales() {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getProducts();
      console.log("PRODUCTS DATA === ", data);
      setProducts(data.data);
    };
    getData();
  }, []);

  return (
    <>
      <h2 className="">🔥 Flash Sales</h2>
      <div className="flashSalesContainer">
        {Products.map((p) => (
          <div key={p.id} className="productContainer">
            {/* <img src={p.image_url} alt={p.name} className="" /> */}
            <motion.img
              src={p.image_url}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.20, rotate: 2 }}
              transition={{ duration: 0.5 }}
            />
            <h3 className="mt-2">{p.name}</h3>
            <p className="text-red-500">
              ${(p.price * (1 - p.discount_price / 100)).toFixed(2)}{" "}
              <span className="line-through text-gray-400">${p.price}</span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
