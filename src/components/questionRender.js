import list from "./questions";
// import Options from "./options";
function QuestionRendering(props) {
  return (
    <span>
      {"Q"}
      {props.value + 1}
      {") "}
      {props.question}
    </span>
  );
}
export default QuestionRendering;
