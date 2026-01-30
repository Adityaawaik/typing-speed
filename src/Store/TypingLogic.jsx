import React, { useEffect, useState } from "react";
import TypingContext from "./TypingContext";

const TypingLogic = ({ children }) => {
  const [randomText, setRandomText] = useState("");
  const [currentText, setCurrentText] = useState("");

  const [correctLetter, setCorrectLetter] = useState(0);
  const [incorrectLetter, setIncorrectLetter] = useState(0);

  const [correctLetterNumbers, setCorrectLetterNumbers] = useState([]);
  const [incorrectLetterNumbers, setIncorrectLetterNumbers] = useState([]);

  const [timer, setTimer] = useState(15);
  const [timerSelected, setTimerSelected] = useState(15);
  const [isTimeStarted, setIsTimeStarted] = useState(false);

  const alphabets = "abcdefghijklmnopqrstuvwxyz";

  const generateRandomWord = () => {
    const length = Math.floor(Math.random() * 8) + 1;
    let word = "";
    for (let i = 0; i < length; i++) {
      word += alphabets[Math.floor(Math.random() * alphabets.length)];
    }
    return word;
  };

  const generateRandomPara = () => {
    const words = [];
    for (let i = 0; i < 30; i++) {
      words.push(generateRandomWord());
    }
    setRandomText(words.join(" "));
  };

  useEffect(() => {
    generateRandomPara();
  }, []);

  const handleTypingText = (e) => {
    const value = e.target.value;
    if (value.length <= randomText.length && timer > 0) {
      setCurrentText(value);
    }
  };

  useEffect(() => {
    let correct = 0;
    let incorrect = 0;

    for (let i = 0; i < currentText.length; i++) {
      if (currentText[i] === randomText[i]) {
        correct++;
      } else {
        incorrect++;
      }
    }

    setCorrectLetter(correct);
    setIncorrectLetter(incorrect);
  }, [currentText, randomText]);

  useEffect(() => {
    if (currentText.length === randomText.length && randomText.length > 0) {
      setCorrectLetterNumbers((prev) => [...prev, correctLetter]);
      setIncorrectLetterNumbers((prev) => [...prev, incorrectLetter]);

      setCurrentText("");
      generateRandomPara();
    }
  }, [currentText, randomText, correctLetter, incorrectLetter]);

  useEffect(() => {
    if (isTimeStarted && timer > 0) {
      const id = setTimeout(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearTimeout(id);
    }
  }, [isTimeStarted, timer]);

  useEffect(() => {
    if (timer === 0) {
      setIsTimeStarted(false);
    }
  }, [timer]);

  const handleTiming = () => {
    setIsTimeStarted(true);
  };

  const totalCorrectLetterNumbers = correctLetterNumbers.reduce(
    (acc, val) => acc + val,
    0
  );

  const totalIncorrectLetterNumbers = incorrectLetterNumbers.reduce(
    (acc, val) => acc + val,
    0
  );

  const displayCorrectLetter = totalCorrectLetterNumbers + correctLetter;

  const displayIncorrectLetter = totalIncorrectLetterNumbers + incorrectLetter;

  const totalCharacteres = displayCorrectLetter + displayIncorrectLetter;

  const wpm = Math.round((totalCharacteres * 60) / (5 * timerSelected));

  const accuracy = Math.round((displayCorrectLetter * 100) / totalCharacteres);

  const cpm = Math.round(totalCharacteres * 60) / timerSelected;

  return (
    <TypingContext.Provider
      value={{
        randomText,
        currentText,
        correctLetter,
        incorrectLetter,
        timer,
        isTimeStarted,
        displayCorrectLetter,
        displayIncorrectLetter,
        totalCharacteres,
        wpm,
        accuracy,
        cpm,
        handleTypingText,
        handleTiming,
        setTimer,
        setTimerSelected,
      }}
    >
      {children}
    </TypingContext.Provider>
  );
};

export default TypingLogic;
