import { useState } from "react";

export default function Setup({ setQuizData }) {
  const [category, setCategory] = useState(18);
  const [difficulty, setDifficulty] = useState("easy");

  async function startQuiz() {
    try {
      const res = await fetch(
        `https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&type=multiple`
      );
      const data = await res.json();
      setQuizData(data.results);
    } catch (error) {
      console.error("Error fetching quiz:", error);
    }
  }

  return (
    <div className="card">
      <h1>Build Quiz</h1>

      <div className="select-group">
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="18">Computer Science</option>
          <option value="9">General Knowledge</option>
          <option value="21">Sports</option>
          <option value="23">History</option>
        </select>

        <select onChange={(e) => setDifficulty(e.target.value)}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <button onClick={startQuiz}>Start Quiz</button>
    </div>
  );
}
