import logo from "./logo.svg";
import { useState } from "react";
import list from "./components/questions";
import GradeView from "./components/grading";
import CustomBtn from "./screen/customBtn";
import QuestionRendering from "./components/questionRender";
import Options from "./components/options";
import "./App.css";

function App() {
  const [index, setIndex] = useState(0);
  const [quizEnded, setQuizEnded] = useState(false);
  const [startQuiz, setStartQuiz] = useState(false);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState([]);

  const onClickStartQuiz = () => {
    setStartQuiz(true);
  };

  const nextQuestion = () => {
    if (index === list.length - 1) {
      setQuizEnded(true);
      setIndex(0);
      const newArray = correctAnswers.filter((v) => v === true);
      setCorrectAnswerCount(newArray.length);
      // setSelectedAnswer(selectedAnswer + 1);
    } else {
      setIndex(index + 1);
      // const newArray = correctAnswers.filter((v) => v === true);
      // checkAnswer(index);
    }
  };

  const checkAnswer = (index, answer) => {
    const _correctAnswers = [...correctAnswers];
    if (list[index].answer === answer) {
      _correctAnswers[index] = true;
      // console.log()
      // setSelectedAnswer(selectedAnswer + 1);
    } else {
      _correctAnswers[index] = false;
      // setSelectedAnswer(selectedAnswer + 0);
    }
    setCorrectAnswers(_correctAnswers);
  };

  const restartQuiz = () => {
    setQuizEnded(false);
    setCorrectAnswers([]);
    // setSelectedAnswer(0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Quiz App</h2>
        {quizEnded ? (
          <div>
            <GradeView correct={correctAnswerCount} arrayLength={list.length} />
            <CustomBtn functionName={restartQuiz} title={"Restart"} />
          </div>
        ) : (
          <div>
            {startQuiz ? (
              <div>
                <h3>
                  <QuestionRendering
                    value={index}
                    question={list[index].question}
                  />
                </h3>

                {list[index].options.map((item) => {
                  return (
                    <Options
                      key={item.id}
                      id={item.id}
                      indexNo={index}
                      setAnswer={(e) => {
                        checkAnswer(index, e.target.value);
                      }}
                      text={item.text}
                    />
                  );
                })}

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
