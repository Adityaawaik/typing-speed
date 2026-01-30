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

      <div className="flex justify-center text-justify">
        <div className="text-center mt-4 mb-4 w-[80%] bg-[#696969] p-8 rounded-2xl shadow-[1px_1px_4px_0px_white] ">
          <h1 className="ml-4 text-3xl text-start mb-4 text-cyan-400 font-bold">
            Pratice Before You Start
          </h1>
          {randomText.split("").map((letter, index) => {
            let color = "text-white-500";

            if (index < currentText.length) {
              color =
                currentText[index] === letter
                  ? "text-green-500"
                  : "text-red-700";
            }

            return (
              <span key={index} className={`${color} text-4xl`}>
                {letter}
              </span>
            );
          })}
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
