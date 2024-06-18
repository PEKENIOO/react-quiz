import Button from "./Button";

function Footer({ index, numQuestions, answer, dispatch, children }) {
  const isFinish = index < numQuestions - 1;
  return (
    <footer>
      {children}
      {answer !== null && (
        <Button
          classStyle="btn btn-ui"
          handler={() => {
            const type = isFinish ? "nextQuestion" : "finish";
            dispatch({
              type: type,
            });
          }}
        >
          {isFinish ? "Next" : "Finish"}
        </Button>
      )}
    </footer>
  );
}

export default Footer;
