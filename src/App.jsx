// App.jsx
import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import PageContent from "./PageContent"; // your SPA sections
import RandomResult from "./pages/RandomResult"; // the mobile result page
import NotFound from "./pages/NotFound";
import { Toaster } from "./../node_modules/react-hot-toast/src/components/toaster";

const App = () => {
  const location = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  return (
    <>
      <Toaster />
      <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white min-h-screen overflow-hidden pt-8">
        {location.pathname !== "/random-result" && (
          <Navbar
            openNavigation={openNavigation}
            setOpenNavigation={setOpenNavigation}
          />
        )}

        <Routes>
          {/* Root path loads your scroll‑based SPA */}
          <Route path="/" element={<PageContent />} />

          {/* Dedicated result page used on mobile */}
          <Route path="/random-result" element={<RandomResult />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
