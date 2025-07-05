import React from "react";
import { useNavigate } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center gap-8">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-2xl text-gray-300">Page Not Found</p>
      <button
        onClick={() => navigate("/")}
        className="mt-4 flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold shadow-lg hover:scale-105 transition"
      >
        <IoHomeSharp className="text-2xl" />
        Go Home
      </button>
    </div>
  );
};

export default NotFound;