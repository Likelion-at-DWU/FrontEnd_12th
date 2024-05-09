import { useState, useEffect } from "react";

const useTimer = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (running) {
      intervalId = setInterval(() => {
        setTime(time + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  });

  return [time, setRunning, running];
};

export default useTimer;
