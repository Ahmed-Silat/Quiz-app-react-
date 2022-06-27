import list from "./questions.js";
// import CustomBtn from "./customBtn.js";
function GradeView(props) {
  const grade = (item) => {
    if (item >= 90 && item <= 100) {
      return "A";
    } else if (item >= 80 && item < 90) {
      return "B";
    } else if (item >= 70 && item < 80) {
      return "C";
    } else if (item >= 60 && item < 70) {
      return "D";
    } else if (item >= 50 && item < 60) {
      return "E";
    } else if (item >= 0 && item < 50) {
      return "F";
    }
  };
  return (
    <div>
      <h3>Quiz Score</h3>
      <h4>You have selected {props.correct} correctly</h4>
      <h4>Your score is {(props.correct / list.length) * 100}%</h4>
      <h4>Your Grade is: {grade((props.correct / list.length) * 100)} </h4>
      {/* <CustomBtn /> */}
    </div>
  );
}
export default GradeView;
