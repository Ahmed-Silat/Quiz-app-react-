import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState([]);
  const [button, setButton] = useState(false);

  const list = [
    {
      question: "Which one is the smallest ocean in the world ?",
      options: ["Indian", "Pacific", "Atlantic", "Arctic"],
    },
    {
      question: "Which country gifted the Statue of Liberty to USA in 1886 ?",
      options: ["France", "Canada", "Brazil", "England"],
    },
  ];

  const startQuiz = () => {
    setButton(true);
  };

  const nextQuestion = () => {
    setIndex(+1);
  };
  return (
    <div className="App">
      <header className="App-header">
        {button ? (
          <div>
            <h3>{list[index].question}</h3>
            {list[index].options.map((item) => {
              return (
                <div key={item}>
                  <input key={item} type="radio" value={item} name="ocean" />
                  {item}
                </div>
              );
            })}
            <button onClick={nextQuestion}>Next</button>
          </div>
        ) : (
          <button onClick={startQuiz}>Start Quiz</button>
        )}
        {/* {button ? (
          <div>
            {list[index].map((item) => {
              // console.log(item)
              return (
                <>
                  <h3>{item[index].question}</h3>
                  {item[index].options.map((info) => {
                    // console.log(info)
                    return <li>{info}</li>;
                  })}
                </>
              );
            })}{" "}
            <button onClick={nextQuestion}>Next</button>{" "}
          </div>
        ) : (
          <button onClick={startQuiz}>Start Quiz</button>
        )} */}
      </header>
    </div>
  );
}

export default App;
