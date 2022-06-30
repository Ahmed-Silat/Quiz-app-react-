// import list from "./questions";
// import QuestionRendering from "./questionRender";
function Options(props) {
  // return list[props.indexNo].options.map((item) => {
  return (
    <div>
      <label>
        <input
          type="radio"
          onChange={props.setAnswer}
          value={props.text}
          name="mcq"
        />
        {/* <Options set={props.setAnswer} /> */}
        {props.text}
      </label>
    </div>
  );
  // });
}
export default Options;
