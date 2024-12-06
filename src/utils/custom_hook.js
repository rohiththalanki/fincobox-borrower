import { useState, useEffect, useRef } from "react";

export const useTimerCount = () => {
  const Ref = useRef(null);
  const Ref1 = useRef(null);
  const [timer, setTimer] = useState("0");
  const [timer1, setTimer1] = useState("0");

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    return { total, seconds };
  };

  const startTimer = (e, setFun) => {
    let { seconds, total } = getTimeRemaining(e);
    if (total >= 0) {
      setFun(+seconds);
    }
  };

  const clearTimer = (e, setFun, ref) => {
    setFun("0");
    if (ref.current) clearInterval(ref.current);
    const id = setInterval(() => {
      startTimer(e, setFun);
    }, 1000);
    ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();

    deadline.setSeconds(deadline.getSeconds() + 30);
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime(), setTimer1, Ref1);
    clearTimer(getDeadTime(), setTimer, Ref);
  }, []);

  const resetTimer = (action) => {
    if (action === 1) clearTimer(getDeadTime(), setTimer, Ref);
    if (action === 2) clearTimer(getDeadTime(), setTimer1, Ref1);
  };

  return {timer, timer1, resetTimer};
};
