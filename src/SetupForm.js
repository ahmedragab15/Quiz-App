import React from "react";
import { useGlobalContext } from "./context";

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();
  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-form" onSubmit={handleSubmit}>
          <h2>Setup quiz</h2>
          <div className="form-control">
            <label htmlFor="amount">Number of questions</label>
            <input
              id="amount"
              name="amount"
              type="number"
              className="form-input"
              min={1}
              max={50}
              value={quiz.amount}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={quiz.category}
              onChange={handleChange}
              className="form-input"
            >
              <option value="sports">sports</option>
              <option value="history">history</option>
              <option value="politics">politics</option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="difficulty">select difficulty</label>
            <select
              id="difficulty"
              name="difficulty"
              value={quiz.difficulty}
              onChange={handleChange}
              className="form-input"
            >
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </select>
          </div>
          {error && (
            <p className="error">
              Can't generate questions, please try different options
            </p>
          )}
          <button type="submit" onClick={handleSubmit} className="submit-btn">
            Start
          </button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
