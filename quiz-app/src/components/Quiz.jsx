import { useState, useEffect } from "react";

export default function Quiz({ quizData, setScore }) {
  const [index, setIndex] = useState(0);
  const [score, updateScore] = useState(0);
  const [time, setTime] = useState(60);
  const [selected, setSelected] = useState(null);

  const question = quizData[index];

  const options = [
    ...question.incorrect_answers,
    question.correct_answer,
  ].sort();

  // Timer countdown
  useEffect(() => {
    if (time === 0) {
      setScore(score);
      return;
    }

    const timer = setTimeout(() => {
      setTime(time - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [time, score, setScore]);

  function checkAnswer(opt) {
    setSelected(opt);

    setTimeout(() => {
      if (opt === question.correct_answer) {
        updateScore((prev) => prev + 1);
      }

      if (index + 1 < quizData.length) {
        setIndex(index + 1);
        setSelected(null);
      } else {
        setScore(score + (opt === question.correct_answer ? 1 : 0));
      }
    }, 800);
  }

  const progressPercent = ((index + 1) / quizData.length) * 100;

  return (
    <div className="card">
      <div className="quiz-header">
        <span>Question {index + 1}/{quizData.length}</span>
        <span className="timer">⏱ {time}s</span>
      </div>

      {/* Progress Bar */}
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>

      <h2 dangerouslySetInnerHTML={{ __html: question.question }} />

      {options.map((opt, i) => (
        <button
          key={i}
          className={`option-btn 
            ${selected === opt &&
              (opt === question.correct_answer ? "correct" : "wrong")}
            ${selected && opt === question.correct_answer ? "correct" : ""}`}
          onClick={() => !selected && checkAnswer(opt)}
          dangerouslySetInnerHTML={{ __html: opt }}
        />
      ))}
    </div>
  );
}
