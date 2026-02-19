import { useState } from "react";
import Setup from "./components/Setup";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import "./App.css";

function App() {
  const [quizData, setQuizData] = useState(null);
  const [score, setScore] = useState(null);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <div className="theme-toggle">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {!quizData && <Setup setQuizData={setQuizData} />}
      {quizData && score === null && (
        <Quiz quizData={quizData} setScore={setScore} />
      )}
      {score !== null && (
        <Result score={score} setQuizData={setQuizData} setScore={setScore} />
      )}
    </div>
  );
}

export default App;
