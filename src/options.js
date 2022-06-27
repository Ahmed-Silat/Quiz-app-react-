import list from "./questions";
// import QuestionRendering from "./questionRender";
function Options(props) {
  return list[props.indexNo].options.map((item) => {
    return (
      <div key={item.id}>
        <label>
          <input
            // key={item.id}
            type="radio"
            onChange={props.setAnswer}
            value={item.text}
            name="mcq"
          />
          {/* <Options set={props.setAnswer} /> */}
          {item.text}
        </label>
      </div>
    );
  });
}
export default Options;
