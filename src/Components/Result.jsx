import React, { useContext } from "react";
import TypingContext from "../Store/TypingContext";

const Result = () => {
  const {
    displayCorrectLetter,
    displayIncorrectLetter,
    totalCharacteres,
    wpm,
    accuracy,
    cpm,
  } = useContext(TypingContext);

  return (
    <div className="flex justify-center mt-10">
      <div className="w-[90%] md:w-[60%] from-slate-900 to-slate-800 rounded-2xl shadow-2xl p-8 text-white">
        <h1 className="text-center text-4xl font-bold mb-6 text-cyan-400">
          Your Typing Result
        </h1>

        <div className="grid grid-cols-2 gap-6 text-center">
          <div className="bg-slate-700 rounded-xl p-4">
            <h2 className="text-xl text-gray-300">WPM</h2>
            <p className="text-3xl font-bold text-green-400">{wpm}</p>
          </div>

          <div className="bg-slate-700 rounded-xl p-4">
            <h2 className="text-xl text-gray-300">CPM</h2>
            <p className="text-3xl font-bold text-blue-400">{cpm}</p>
          </div>

          <div className="bg-slate-700 rounded-xl p-4">
            <h2 className="text-xl text-gray-300">Accuracy</h2>
            <p className="text-3xl font-bold text-yellow-400">{accuracy}%</p>
          </div>

          <div className="bg-slate-700 rounded-xl p-4">
            <h2 className="text-xl text-gray-300">Total Typed</h2>

            <p className="text-3xl font-bold text-pink-400">
              {totalCharacteres}
            </p>
          </div>
        </div>

        <div className="flex justify-between mt-8 text-lg text-gray-300">
          <p>✅ Correct: {displayCorrectLetter}</p>

          <p>❌ Incorrect: {displayIncorrectLetter}</p>
        </div>
      </div>
    </div>
  );
};

export default Result;
