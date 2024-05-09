import { useState, useEffect } from "react";

function useTimer(initialTime) {
  // 훅 정의
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [initialTime]);

  return time;
}

export default useTimer;
