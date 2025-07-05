import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const RandomResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const movie = location.state?.movie;
  console.log(movie.original_title);
  return (
    <div className="mt-16">
       ahklsa
    </div>
  );
};

export default RandomResult;
