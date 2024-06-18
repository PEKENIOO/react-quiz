import Button from "./Button";

function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <Button
          key={option}
          classStyle={`btn btn-option ${index === answer && "answer"} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          handler={() => dispatch({ type: "newAnswer", payload: index })}
          disabled={hasAnswered}
        >
          {option}
        </Button>
      ))}
    </div>
  );
}

export default Options;
