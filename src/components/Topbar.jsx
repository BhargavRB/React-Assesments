import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <header className="w-full bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Title */}
        <div className="text-2xl font-semibold tracking-wide">
          React Assessment Demos
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <Link to="/virtualized-list" className="hover:text-gray-300 transition">
            Virtualized List
          </Link>
          <Link to="/order-track" className="hover:text-gray-300 transition">
            Real-Time Order Tracker
          </Link>
          <Link to="/live-cart" className="hover:text-gray-300 transition">
            Live Cart System
          </Link>
          {/* Add more links here */}
        </nav>
      </div>
    </header>
  );
};

export default Topbar;
