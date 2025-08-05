import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DynamicTitleUpdate = () => {
  const location = useLocation();

  useEffect(() => {
    let title = "Absolute Cinema";

    if (location.pathname === "/random-result") {
      title = "Random Result | Absolute Cinema";
    } else if (location.pathname === "/search-result") {
      title = "Search Result | Absolute Cinema";
    } else {
      switch (location.hash) {
        case "#home":
        case "":
          title = "Home | Absolute Cinema";
          break;
        case "#random":
          title = "Random Movie Generator | Absolute Cinema";
          break;
        case "#guide":
          title = "Movie Binge Guide | Absolute Cinema";
          break;
        case "#search":
          title = "Search Movies | Absolute Cinema";
          break;
        case "#about":
          title = "About | Absolute Cinema";
          break;
        default:
          title = "Absolute Cinema";
      }
    }

    document.title = title;
  }, [location]);

  return null;
};

export default DynamicTitleUpdate;
