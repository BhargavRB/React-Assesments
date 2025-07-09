import { mockItems } from "../mockData";

function ResponsiveGrid() {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Responsive Restaurant Grid
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {mockItems.slice(0, 20).map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-1">
              {item.title}
            </h2>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResponsiveGrid;
