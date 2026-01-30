import { useContext } from "react";
import "./App.css";
import Heading from "./Components/Heading";
import TypingText from "./Components/TypingText";
import TypingContext from "./Store/TypingContext";
import Result from "./Components/Result";

function App() {
  const { timer } = useContext(TypingContext);
  return (
    <>
      <Heading />

      {timer === 0 ? <Result /> : <TypingText />}
    </>
  );
}

export default App;
