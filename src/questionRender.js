import list from "./questions";
// import Options from "./options";
function QuestionRendering(props) {
  return (
    <div>
      <h3>
        {"Q"}
        {props.value + 1}
        {") "}
        {list[props.value].question}
      </h3>
    </div>
  );
}
export default QuestionRendering;
