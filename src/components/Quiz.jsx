import { useContext } from "react";

import { QuizContext } from "../context/quiz";

import Question from "./Question";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="quiz">
      {quizState.showResults && (
        <div className="results">
          <div className="congratulations">Congratulations</div>
          <div className="results_info">
            <div>You have complete the quiz</div>
            <div>
              You ve got {quizState.correctAnswersCount} of {quizState.questions.length}
            </div>
            <div className="next_button " onClick={() => dispatch({ type: "RESTART" })}>
              Restart
            </div>
          </div>
        </div>
      )}
      {!quizState.showResults && (
        <div>
          <div className="score">
            Quest ion {quizState.currentQuestionIndex + 1}/{quizState.questions.length}{" "}
          </div>

          <Question />

          <div
            className="next_button"
            onClick={() => dispatch({ type: "NEXT_QUESTION" })}
          >
            Next question
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
