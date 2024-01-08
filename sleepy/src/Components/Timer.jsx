import React, { useEffect,useState } from 'react';
import "../Style/Night.css";

function Timer() {

  // useEffect(() => {
  //   liff.init({
  //     liffId: '2000767035-OrrpdKLR', // Use own liffId
  //     withLoginOnExternalBrowser: true, // Enable automatic login process
  // }).then(() => {
  //     // Start to use liff's api
  // });
  // });

  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  const[startbtn, setStartbtn] = useState(true);
  const[stopbtn, setStopbtn] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setElapsedTime(prevElapsedTime => prevElapsedTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
    setStartbtn(false);
    setStopbtn(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <div className="Night">
      <h1>睡眠時間計測</h1>
      <p>経過時間: {elapsedTime}秒</p>
        {startbtn && <button onClick={handleStart}>寝る</button>}
        {stopbtn && <button onClick={handleStop}>起きた</button>}
      
    </div>
  );
}

export default Timer;