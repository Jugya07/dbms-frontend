import React from "react";
import Home from "./screens/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./screens/admin";

export default function App() {
  return (
    <div>
      <Router>
        <div className="main-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
