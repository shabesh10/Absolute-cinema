import React from "react";

const Slide = ({ title = "Untitled", desc = "", imageUrl = "", url = "" }) => {
  return (
    <div className="flex flex-col items-center text-center bg-slate-800 text-white p-4 rounded-xl shadow-lg transition-all duration-300">
      <img
        src={imageUrl || "src\\assets\\letterboxd-rating.webp"}
        alt={`${title} related image`}
        className="w-full max-h-[400px] max-w-[600px] object-cover rounded-xl mb-4 aspect-[16/9]"
      />
      <h2 className="text-xl font-bold mb-4">
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            {title}
          </a>
        ) : (
          title
        )}
      </h2>
      <p>{desc}</p>
    </div>
  );
};

export default Slide;
