import { restaurantRatings } from "../mockData";

 function findConsistentlyLowRated(data, threshold = 3)   {
    return data.filter((restaurant) =>
        restaurant.ratings.every((rating) => rating <= threshold)
    );
};

function LowRatedRestaurants() {
  const lowRated = findConsistentlyLowRated(restaurantRatings, 3);

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Restaurants with Consistently Low Ratings
      </h1>

      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        {lowRated.length === 0 ? (
          <p className="text-gray-500 text-center">No low-rated restaurants found.</p>
        ) : (
          <ul className="divide-y divide-gray-100">
            {lowRated.map((rest) => (
              <li key={rest.id} className="py-4">
                <div className="text-lg font-medium text-gray-800">{rest.name}</div>
                <div className="text-sm text-gray-500">
                  Ratings: {rest.ratings.join(", ")}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default LowRatedRestaurants;
