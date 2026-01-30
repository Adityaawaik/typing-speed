import React, { useContext } from "react";
import TypingContext from "../Store/TypingContext";

const Timer = () => {
  const { timer, handleTiming, isTimeStarted, setTimer, setTimerSelected } =
    useContext(TypingContext);
  const timerBtns = [15, 30, 60, 120];
  return (
    <>
      <h1 className="text-center mt-4 mb-4 text-3xl text-orange-500 font-bold">
        {timer}s
      </h1>

      <div className="flex justify-center gap-6">
        {timerBtns.map((timerBtn) => (
          <button
            onClick={() => {
              setTimer(timerBtn);
              setTimerSelected(timerBtn);
            }}
            className={`cursor-pointer text-2xl font-bold w-30.5 p-2 rounded-lg bg-amber-400 
            hover:text-black`}
            key={timerBtn}
          >
            {timerBtn}s
          </button>
        ))}
      </div>

      <div className="flex justify-center mt-4 mb-4">
        <button
          onClick={handleTiming}
          className={`cursor-pointer text-2xl mt-4 mb-4 font-bold w-30.5 p-2 rounded-lg ${
            isTimeStarted
              ? "bg-red-300 text-black hover:bg-red-700 hover:text-white"
              : "bg-green-300 text-black hover:bg-green-700 hover:text-white"
          }`}
        >
          {isTimeStarted ? "STOP" : "START"}
        </button>
      </div>
    </>
  );
};

export default Timer;
