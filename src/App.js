import logo from "./logo.svg";
import { useState } from "react";
import list from "./data";
import "./App.css";

function App() {
  const [index, setIndex] = useState(0);
  const [quizEnded, setQuizEnded] = useState(false);
  const [startQuiz, setStartQuiz] = useState(false);

  const onClickStartQuiz = () => {
    setStartQuiz(true);
  };

  const nextQuestion = () => {
    if (index === list.length - 1) {
      setQuizEnded(true);
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <h2>Quiz App</h2>
        {quizEnded ? (
          <div>
            <h3>Quiz Score</h3>
            <h4>You got 50%</h4>
            <button onClick={() => setQuizEnded(false)}>Restart Quiz</button>
          </div>
        ) : (
          <div>
            {startQuiz ? (
              <div>
                <h3>
                  {"Q"}
                  {index + 1}
                  {") "}
                  {list[index].question}
                </h3>
                {list[index].options.map((item) => {
                  return (
                    <div key={item}>
                      <input
                        key={item}
                        type="radio"
                        value={item}
                        name="ocean"
                      />
                      {item}
                    </div>
                  );
                })}
                <button onClick={nextQuestion}>Next</button>
              </div>
            ) : (
              <button onClick={onClickStartQuiz}>Start Quiz</button>
            )}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
