import React from "react";
import useTimer from "./component/useTimer";
import "./App.css";

const App = () => {
  const [time, setRunning, running] = useTimer(0);

  return (
    <div className="btn">
      <div className="wtis">현재 {time} 초 지났습니다</div>
      <button onClick={() => setRunning(!running)}>
        {running ? "멈춤" : "시작"}
      </button>
    </div>
  );
};

export default App;
