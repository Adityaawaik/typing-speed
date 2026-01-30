import React, { createContext } from "react";
const defaultContext = {
  randomText: "",
  currentText: "",
  correctLetter: 0,
  incorrectLetter: 0,
  timer: 15,
  isTimeStarted: false,
  displayCorrectLetter: 0,
  displayIncorrectLetter: 0,
  totalCharacteres: 0,
  wpm: 0,
  accuracy: 0,
  cpm: 0,
  handleTypingText: () => {},
  handleTiming: () => {},
  setTimer: () => {},
  setTimerSelected: () => {},
};

const TypingContext = createContext(defaultContext);

export default TypingContext;
