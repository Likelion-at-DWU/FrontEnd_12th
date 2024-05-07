import React from "react";
import useTimer from "./useTimer";

function TimerComponent() {
  const currentTime = useTimer(0);

  return (
    <div>
      <p>현재 시간: {currentTime} 초</p>
    </div>
  );
}

export default TimerComponent;
