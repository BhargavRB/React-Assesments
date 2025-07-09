// mockData.js
export const restaurantRatings = [
  {
    id: 1,
    name: "Spicy Bites",
    ratings: [2, 3, 2, 1, 2],
  },
  {
    id: 2,
    name: "Green Garden",
    ratings: [4, 5, 4, 3, 4],
  },
  {
    id: 3,
    name: "Urban Tadka",
    ratings: [3, 3, 3, 3, 3],
  },
  {
    id: 4,
    name: "Curry Palace",
    ratings: [2, 2, 1, 2, 1],
  },
  {
    id: 5,
    name: "Fusion Feast",
    ratings: [4, 4, 5, 4, 5],
  },
];

export const mockItems = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  title: `Restaurant #${i + 1}`,
  description: `This is description for restaurant #${i + 1}`,
}));