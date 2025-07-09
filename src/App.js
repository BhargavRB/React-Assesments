import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar";
import VirtualizedList from "./components/VirtualizedList";
import RealTimeOrderTracker from "./components/RealTimeOrderTracker";
import LiveCartSystem from "./components/LiveCartSystem";

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
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
