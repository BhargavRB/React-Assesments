import React, { useEffect, useState } from "react";
import { Server } from "mock-socket";

const MOCK_URL = "ws://localhost:8080";

const mockServer = new Server(MOCK_URL);

mockServer.on("connection", (socket) => {
    setInterval(() => {
        const id = Math.floor(Math.random() * 1000);
        const status = ["Preparing", "Cooking", "Out for Delivery", "Delivered"][
        Math.floor(Math.random() * 4)
        ];
        socket.send(JSON.stringify({ id, status }));
    }, 2000);
});

function RealTimeOrderTracker() {
  const [orders, setOrders] = useState({});

  useEffect(() => {
    const socket = new WebSocket(MOCK_URL);

    socket.onmessage = (event) => {
      const updatedOrder = JSON.parse(event.data);
      const orderId = updatedOrder.id;

      setOrders((prev) => ({
        ...prev,
        [orderId]: updatedOrder,
      }));

      // Set timeout to auto-remove after 5 seconds
      setTimeout(() => {
        setOrders((prev) => {
          const newOrders = { ...prev };
          delete newOrders[orderId];
          return newOrders;
        });
      }, 10000);
    };

    return () => socket.close();
  }, []);

  return (
    <div className="h-screen w-full p-6 bg-gray-50">
      <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">
        Real-Time Order Tracker
      </h1>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6 border border-gray-200">
        <ul className="divide-y divide-gray-100">
          {Object.entries(orders).length === 0 && (
            <li className="text-gray-500 text-center py-6">Waiting for orders...</li>
          )}
          {Object.entries(orders).map(([id, order]) => (
            <li key={id} className="py-4 flex items-center justify-between">
              <span className="text-gray-700 font-medium">Order #{id}</span>
              <span className="text-sm px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                {order.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RealTimeOrderTracker;
