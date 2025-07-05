// App.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PageContent from "./PageContent";          // your SPA sections
import RandomResult from "./pages/RandomResult";  // the mobile result page

const App = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white min-h-screen overflow-hidden pt-8">
      <Navbar
        openNavigation={openNavigation}
        setOpenNavigation={setOpenNavigation}
      />

      <Routes>
        {/* Root path loads your scroll‑based SPA */}
        <Route path="/" element={<PageContent />} />

        {/* Dedicated result page used on mobile */}
        <Route path="/random-result" element={<RandomResult />} />
      </Routes>
    </div>
  );
};

export default App;
