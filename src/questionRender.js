import list from "./questions";
function QuestionRendering(props) {
  return (
    <div>
      <h3>
        {"Q"}
        {props.value + 1}
        {") "}
        {list[props.value].question}
      </h3>
      {list[index].options.map((item) => {
        return (
          <div key={item.id}>
            <label>
              <input
                // key={item.id}
                type="radio"
                onChange={(e) => {
                  setSelectedAnswer(e.target.value);
                }}
                value={item.text}
                name="mcq"
              />
              {item.text}
            </label>
          </div>
        );
      })}
    </div>
  );
}
export default QuestionRendering;
