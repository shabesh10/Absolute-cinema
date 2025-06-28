import React from "react";
import Navbar from "./components/Navbar";
import PageContent from "./PageContent";

const App = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white min-h-screen overflow-hidden pt-2rem lg:pt-4.5rem">
      <Navbar
        openNavigation={openNavigation}
        setOpenNavigation={setOpenNavigation}
      />
      <PageContent openNavigation={openNavigation} />
    </div>
  );
};

export default App;

// ??????????????????