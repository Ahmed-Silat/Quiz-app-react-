import logo from "./logo.svg";
import { useState } from "react";
import list from "./questions";
import GradeView from "./grading";
import CustomBtn from "./customBtn";
import QuestionRendering from "./questionRender";
import Options from "./options";
import "./App.css";

function App() {
  const [index, setIndex] = useState(0);
  const [quizEnded, setQuizEnded] = useState(false);
  const [startQuiz, setStartQuiz] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState();
  const [correctAnswer, setCorrectAnswer] = useState(0);

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
    }
  };

  const restartQuiz = () => {
    setQuizEnded(false);
    setCorrectAnswer(0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Quiz App</h2>
        {quizEnded ? (
          <div>
            <GradeView correct={correctAnswer} />
            <CustomBtn functionName={restartQuiz} title={"Restart"} />
          </div>
        ) : (
          <div>
            {startQuiz ? (
              <div>
                <QuestionRendering value={index} />
                <Options
                  indexNo={index}
                  setAnswer={(e) => {
                    setSelectedAnswer(e.target.value);
                  }}
                />
                <CustomBtn functionName={nextQuestion} title={"Next"} />
              </div>
            ) : (
              <CustomBtn functionName={onClickStartQuiz} title={"Start Quiz"} />
            )}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
