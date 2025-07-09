import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <header className="w-full bg-gray-900 text-white shadow-md">
      <div className="mx-auto flex items-center justify-between px-4 py-5">
        {/* Left: Title */}
        <div className="text-2xl font-semibold tracking-wide">
          React Assessment Demos
        </div>

        {/* Right: Navigation */}
        <nav className="flex flex-wrap justify-end gap-x-6 gap-y-2 text-sm md:text-base">
          <Link to="/virtualized-list" className="hover:text-gray-300 transition">
            Virtualized List
          </Link>
          <Link to="/order-track" className="hover:text-gray-300 transition">
            Real-Time Order Tracker
          </Link>
          <Link to="/live-cart" className="hover:text-gray-300 transition">
            Live Cart System
          </Link>
          <Link to="/search" className="hover:text-gray-300 transition">
            Debounce Search
          </Link>
          <Link to="/low-rated-restaurant" className="hover:text-gray-300 transition">
            Low Rated Restaurants
          </Link>
          <Link to="/ifinite-scrolling" className="hover:text-gray-300 transition">
            Infinite Scrolling
          </Link>
          <Link to="/responsive-grid" className="hover:text-gray-300 transition">
            Responsive Grid
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Topbar;
