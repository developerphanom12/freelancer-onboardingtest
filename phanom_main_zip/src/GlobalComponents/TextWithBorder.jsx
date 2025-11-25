import React from "react";

const TextWithBorder = ({ words }) => {
  return (
    <div className="flex flex-col gap-2 text-center lg:text-left">
      {words.map((word, i) => (
        <h2
          key={i}
          className="text-[50px] sm:text-[35px] font-bold leading-tight 
                     text-white opacity-80
                     [-webkit-text-stroke:2px_#6c5fd4] 
                     [text-shadow:0px_8px_5px_rgba(0,0,0,0.3)]"
        >
          {word}
        </h2>
      ))}
    </div>
  );
};

export default TextWithBorder;
