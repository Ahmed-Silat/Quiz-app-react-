function CustomBtn(props) {
  return (
    <button
      className="custom-btn"
      onClick={() => {
        props.functionName(props.restartQuiz);
      }}
    >
      {props.title}
    </button>
  );
}

export default CustomBtn;
