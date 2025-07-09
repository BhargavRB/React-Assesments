import React, { useState } from "react";

const PRODUCTS = [
  { id: 1, name: "Laptop", price: 800 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 300 },
  { id: 4, name: "Headphones", price: 150 },
  { id: 5, name: "Mouse", price: 50 },
];

function LiveCartSystem() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="h-screen w-full p-6 bg-gray-50">
      <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">
        Live Cart System
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <h2 className="text-xl font-bold mb-4 text-gray-700">Products</h2>
          <ul className="space-y-4">
            {PRODUCTS.map((p) => (
              <li key={p.id} className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-800">{p.name}</p>
                  <p className="text-gray-500 text-sm">${p.price}</p>
                </div>
                <button
                  onClick={() => addToCart(p)}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Add
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <h2 className="text-xl font-bold mb-4 text-gray-700">Your Cart</h2>
          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <ul className="space-y-4">
              {cart.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-between border-b pb-2 border-gray-100"
                >
                  <div>
                    <p className="text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-500">${item.price}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(idx)}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-6 text-right">
            <p className="text-lg font-semibold text-gray-800">
              Total: ${total}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveCartSystem;
