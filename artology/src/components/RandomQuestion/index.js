import React from "react";
import "./RandomQuestion.css";

function RandomQuestion(props) {
  return (
    <section className="random-question-section">
      <h2 className="title">{props.question.question}</h2>
      <br />
      <button 
        name="get-new-challenge-button"
        onClick={(event) => {

          event.preventDefault(); // Prevent the default behavior (page reload)
          props.getRandomQuestion(); // Call the getRandomItem function passed from the parent component
        }}
      >
        New challenge!
      </button>
    </section>
  );
}

export default RandomQuestion;