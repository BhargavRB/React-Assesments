// components/DebouncedSearchWithError.jsx
import React, { useEffect, useState } from "react";

const MOCK_API = "https://jsonplaceholder.typicode.com/users";

function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup/cancellation
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

function DebouncedSearchWithError() {
    const [query, setQuery] = useState("");
    const debouncedQuery = useDebounce(query, 0);
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

  // Simulate a render-time error if input is "error"
  if (query.toLowerCase() === "error") {
    throw new Error("Simulated render error");
  }

    useEffect(() => {
        if (!debouncedQuery.trim()) {
        setResults([]);
        return;
        }

        setLoading(true);
        fetch(MOCK_API)
        .then((res) => res.json())
        .then((data) => {
            const filtered = data.filter((user) =>
            user.name.toLowerCase().includes(debouncedQuery.toLowerCase())
            );
            setResults(filtered);
            setLoading(false);
        })
        .catch(() => setLoading(false));
    }, [debouncedQuery]);

  return (
    <div className="max-w-xl mx-auto">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search users..."
        className="w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="mt-4 bg-white rounded-md shadow p-4 min-h-[100px]">
        {loading ? (
          <p className="text-blue-500">Loading...</p>
        ) : results.length === 0 && query ? (
          <p className="text-gray-500">No results found.</p>
        ) : (
          <ul className="divide-y divide-gray-100">
            {results.map((user) => (
              <li key={user.id} className="py-2">
                <p className="text-gray-800 font-medium">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
                <p className="text-sm text-gray-400">{
                    Object.entries(user.address).map(([key, value]) => {
                    if (typeof value === "object") {
                        return Object.values(value).join(", ");
                    }
                    return value;
                    })
                    .join(", ")}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default DebouncedSearchWithError;
