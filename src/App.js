import logo from "./logo.svg";
import { useState } from "react";
import list from "./questions";
import GradeView from "./grading";
import CustomBtn from "./customBtn";
import QuestionRendering from "./questionRender";
import "./App.css";

function App() {
  const [index, setIndex] = useState(0);
  const [quizEnded, setQuizEnded] = useState(false);
  const [startQuiz, setStartQuiz] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState();
  const [correctAnswer, setCorrectAnswer] = useState(1);

  const onClickStartQuiz = () => {
    setStartQuiz(true);
  };

  const nextQuestion = () => {
    if (index === list.length - 1) {
      setQuizEnded(true);
      setIndex(0);
    } else {
      setIndex(index + 1);
      checkAnswer(index);
    }
  };

  const checkAnswer = (index) => {
    if (list[index].answer === selectedAnswer) {
      setCorrectAnswer(correctAnswer + 1);
      // console.log("here");
    }
    // else {
    //   setCorrectAnswer(0);
    // }
  };

  const restartQuiz = () => {
    setQuizEnded(false);
    setCorrectAnswer(0);
  };

  // const grade = (item) => {
  //   if (item >= 90 && item <= 100) {
  //     return "A";
  //   } else if (item >= 80 && item < 90) {
  //     return "B";
  //   } else if (item >= 70 && item < 80) {
  //     return "C";
  //   } else if (item >= 60 && item < 70) {
  //     return "D";
  //   } else if (item >= 50 && item < 60) {
  //     return "E";
  //   } else if (item >= 0 && item < 50) {
  //     return "F";
  //   }
  // };
  // console.log({ list });

  return (
    <div className="App">
      <header className="App-header">
        <h2>Quiz App</h2>
        {quizEnded ? (
          <div>
            {/* <h3>Quiz Score</h3>
            <h4>You have selected {correctAnswer} correctly</h4>
            <h4>Your score is {(correctAnswer / list.length) * 100}%</h4>
            <h4>
              Your Grade is: {grade((correctAnswer / list.length) * 100)}{" "}
            </h4>
            <button onClick={restartQuiz}>Restart Quiz</button> */}
            <GradeView correct={correctAnswer} />
            <CustomBtn functionName={restartQuiz} title={"Restart"} />
          </div>
        ) : (
          <div>
            {startQuiz ? (
              <div>
                {/* <h3>
                  {"Q"}
                  {index + 1}
                  {") "}
                  {list[index].question}
                </h3> */}
                {<QuestionRendering value={index} />}
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
                {/* <button onClick={() => nextQuestion()}>Next</button> */}
                <CustomBtn functionName={nextQuestion} title={"Next"} />
              </div>
            ) : (
              // <button onClick={onClickStartQuiz}>Start Quiz</button>
              <CustomBtn functionName={onClickStartQuiz} title={"Start Quiz"} />
            )}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
