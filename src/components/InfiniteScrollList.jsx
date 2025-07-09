// components/InfiniteScrollList.jsx
import React, { useEffect, useRef, useState } from "react";
import { mockItems } from "../mockData";

const PAGE_SIZE = 10;

function InfiniteScrollList() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);

  // Load initial and next set
  useEffect(() => {
    const start = (page - 1) * PAGE_SIZE;
    const end = page * PAGE_SIZE;
    const nextPageItems = mockItems.slice(start, end);

    setItems((prev) => [...prev, ...nextPageItems]);

    if (end >= mockItems.length) setHasMore(false);
  }, [page]);

  // Observer for infinite scroll
  useEffect(() => {
    if (!loaderRef.current || !hasMore) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [hasMore]);

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-semibold text-center mb-6 text-gray-800">
        Infinite Scroll Restaurants
      </h1>

      <div className="max-w-2xl mx-auto bg-white shadow-md p-4 rounded-lg">
        <ul className="divide-y divide-gray-100">
          {items.map((item) => (
            <li key={item.id} className="py-4">
              <div className="font-medium text-gray-800">{item.title}</div>
              <div className="text-sm text-gray-500">{item.description}</div>
            </li>
          ))}
        </ul>

        {hasMore ? (
          <div
            ref={loaderRef}
            className="py-4 text-center text-blue-500 font-medium animate-pulse"
          >
            Loading more...
          </div>
        ) : (
          <div className="py-4 text-center text-gray-500">No more items.</div>
        )}
      </div>
    </div>
  );
}

export default InfiniteScrollList;
