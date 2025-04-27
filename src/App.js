import React from "react";
import { useGlobalContext } from "./context";
import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";

function App() {
  const { questions, waiting, loading, index, correct, nextQuestion, checkAnswer, isModalOpen } = useGlobalContext();

  if (waiting) {
    return <SetupForm />;
  }

  if (loading) {
    return <Loading />;
  }

  const { question, incorrect_answers, correct_answer } = questions[index];
  let answers = [...incorrect_answers];
  const tempIndex = Math.floor(Math.random() * 4);
  if (tempIndex === 3) {
    answers.push(correct_answer);
  } else {
    answers.push(answers[tempIndex]);
    answers[tempIndex] = correct_answer;
  }

  return (
    <main>
      {isModalOpen && <Modal />}
      <section className="quiz">
        <p className="correct-answers">
          Correct answers: {correct}/{index}
        </p>
        <article className="container">
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className="btn-container">
            {answers.map((answer, index) => {
              return <button className="answer-btn" key={index} onClick={() => checkAnswer(answer === correct_answer)} dangerouslySetInnerHTML={{ __html: answer }} />;
            })}
          </div>
        </article>
        <button className="next-question" onClick={() => nextQuestion()}>
          Next Question
        </button>
      </section>
    </main>
  );
}

export default App;
