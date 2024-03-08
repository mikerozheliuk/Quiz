const Answer = ({ answerText, onSelectAnswer, index, correctAnswer, currentAnswer }) => {
  const letterMapping = ["A", "B", "C", "D"];

  const isCorrectAnswer = currentAnswer && answerText === correctAnswer;

  const isWrongAnswer = currentAnswer === answerText && currentAnswer !== correctAnswer;

  const correctAnswerClass = isCorrectAnswer ? "correct_answer" : "";

  const wrongAnswerClass = isWrongAnswer ? "wrong_answer" : "";

  const disabledClass = currentAnswer ? "disable_answer" : "";

  return (
    <div
      className={` answer ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`}
      onClick={() => onSelectAnswer(answerText)}
    >
      <div className="answer_letter">{letterMapping[index]}</div>
      <div className="answer_text">{answerText}</div>
    </div>
  );
};

export default Answer;
