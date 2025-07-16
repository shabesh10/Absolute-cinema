import React from "react";

const Slide = (props) => {
  
  return (
    <div className="flex flex-col text-center">
      <img src={props.imageUrl} alt={`${props.title} related image`} />
      {props.url.length > 0 ? (
        <a href={props.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline hover:cursor-pointer">
          <h2 className="text-xl font-bold mb-4">{props.title}</h2>
        </a>
      ) : (
        <h2 className="text-xl font-bold mb-4">{props.title}</h2>
      )}
      <p>{props.desc}</p>
    </div>
  );
};

export default Slide;
