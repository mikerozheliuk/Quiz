import React from "react";
import ReactDOM from "react-dom/client";
import Quiz from "./components/Quiz";
import "./index.scss";
import { QuizProvider } from "./context/quiz";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QuizProvider>
      <Quiz />
    </QuizProvider>
  </React.StrictMode>
);
