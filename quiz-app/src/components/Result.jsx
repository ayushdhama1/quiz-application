import { useEffect, useState } from "react";

export default function Result({ score, setQuizData, setScore }) {
  const [displayScore, setDisplayScore] = useState(0);

  // Animated score counter
  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      if (start < score) {
        start++;
        setDisplayScore(start);
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [score]);

  return (
    <div className="card result-card">
      <h1>Your Score</h1>
      <h2 className="score-animate">{displayScore}</h2>

      <button
        onClick={() => {
          setQuizData(null);
          setScore(null);
        }}
      >
        Restart Quiz
      </button>
    </div>
  );
}
