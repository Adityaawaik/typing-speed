import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import TypingLogic from "./Store/TypingLogic.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TypingLogic>
      <App />
    </TypingLogic>
  </StrictMode>
);
