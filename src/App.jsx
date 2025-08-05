import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import PageContent from "./PageContent"; // your SPA sections
import RandomResult from "./pages/RandomResult"; // the mobile result page
import NotFound from "./pages/NotFound";
import toast, { Toaster } from "react-hot-toast";
import SearchResult from "./sections/SearchResult";
import DynamicTitleUpdate from "./DynamicTitleUpdate";

const App = () => {
  const location = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  useEffect(() => {
    toast.error(
      "If you are using Jio network, Random generator won't work due to network restrictions. Please try using a different network.",
      { duration: 6500,
        icon: "⚠️",
       }
    );
  }, []);

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "rgba(0, 0, 0, 0.9)",
            color: "#fff",
            border: "1px solid #4b5563",
            borderRadius: "8px",
          },
        }}
      />
      <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white min-h-screen overflow-hidden pt-8">
        {location.pathname !== "/random-result" && (
          <Navbar
            openNavigation={openNavigation}
            setOpenNavigation={setOpenNavigation}
          />
        )}
          <DynamicTitleUpdate/>
        <Routes>
          {/* Root path loads your scroll‑based SPA */}
          <Route path="/" element={<PageContent />} />

          {/* Dedicated result page used on mobile */}
          <Route path="/random-result" element={<RandomResult />} />
          <Route path="/search-result" element={<SearchResult />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
