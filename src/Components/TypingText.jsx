import React, { useContext, useEffect, useRef } from "react";
import TypingContext from "../Store/TypingContext";
import Timer from "./Timer";

const TypingText = () => {
  const { randomText, currentText, handleTypingText, isTimeStarted } =
    useContext(TypingContext);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [isTimeStarted]);

  return (
    <>
      <Timer />

      <div className="flex justify-center px-4">
        <div className="mt-4 mb-4 w-full max-w-225 bg-[#696969]/90 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg">
          <h1 className="text-lg sm:text-xl md:text-3xl text-start mb-4 text-cyan-400 font-bold">
            Practice Before You Start
          </h1>

          <div className="wrap-break-word-break-words leading-relaxed">
            {randomText.split("").map((letter, index) => {
              let color = "text-white";

              if (index < currentText.length) {
                color =
                  currentText[index] === letter
                    ? "text-green-400"
                    : "text-red-400";
              }

              return (
                <span
                  key={index}
                  className={`${color} text-2xl sm:text-3xl md:text-4xl font-semibold`}
                >
                  {letter}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <input
        ref={inputRef}
        onChange={handleTypingText}
        className="border-2 mt-4 ml-4 p-2 opacity-0"
        type="text"
        name=""
        id=""
        value={currentText}
        autoFocus
      />
    </>
  );
};

export default TypingText;
