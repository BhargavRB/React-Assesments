import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar";
import VirtualizedList from "./components/VirtualizedList";
import RealTimeOrderTracker from "./components/RealTimeOrderTracker";
import LiveCartSystem from "./components/LiveCartSystem";
import DebouncedSearch from "./components/DebouncedSearch";
import ErrorBoundary from "./components/ErrorBoundary";
import LowRatedRestaurants from "./components/LowRatedRestaurants";
import InfiniteScrollList from "./components/InfiniteScrollList";
import ResponsiveGrid from "./components/ResponsiveGrid";

function App() {
  return (
    <Router>
      <div className="App">
        <Topbar />
        <main className="p-6">
          <Routes>
            <Route path="/virtualized-list" element={<VirtualizedList />} />
            <Route path="/order-track" element={<RealTimeOrderTracker />} />
            <Route path="/live-cart" element={<LiveCartSystem />} />
            <Route path="/search" element={<ErrorBoundary><DebouncedSearch /></ErrorBoundary>} />
            <Route path="/low-rated-restaurant" element={<LowRatedRestaurants />} />
            <Route path="/ifinite-scrolling" element={<InfiniteScrollList/>}/>
            <Route path="/responsive-grid" element={<ResponsiveGrid />}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
