import list from "./questions";
import QuestionRendering from "./questionRender";
function Options() {
  return (
    <input
      // key={item.id}
      type="radio"
      onChange={(e) => {
        setSelectedAnswer(e.target.value);
      }}
      value={item.text}
      name="mcq"
    />
  );
}
export default Options;
