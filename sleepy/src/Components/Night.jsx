import React, { useEffect } from 'react';
import "../Style/Night.css";

function Night({ timer, setTimer, timerRunning, startTimer,stopTimer }) {
  useEffect(() => {
    let interval;

    if (timerRunning) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timerRunning, setTimer]);

  // Night画面がマウントされたときにタイマーを開始する
  useEffect(() => {
    startTimer();
    return () => stopTimer(); // Night画面がアンマウントされた時にタイマーを停止する
  }, [startTimer,stopTimer]);

  return (
    <div className="Night">
      <h1>おやすみ画面</h1>
      <p>経過時間: {timer}秒</p>
    </div>
  );
}

export default Night;