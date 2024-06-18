import Options from "./Options";
import Button from "./Button";

function Question({ question, dispatch, answer, index, numQuestions }) {
  return (
    <div>
      <h4>{question.question}</h4>

      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
