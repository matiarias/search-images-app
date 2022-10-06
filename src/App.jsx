import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import ImageDetail from "./pages/ImageDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/image/:id" element={<ImageDetail />} />
      </Routes>
    </div>
  );
}

export default App;
