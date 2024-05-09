import React from "react";
import useTimer from "./useTimer"; // 커스텀 훅 import

function TimerComponent() {
  const currentTime = useTimer(0); // 커스텀 훅 사용

  return (
    <div>
      <p>현재 시간: {currentTime} 초</p>
    </div>
  );
}

export default TimerComponent;
