import { useEffect, useState } from "react";
import liff from "@line/liff";
import "./App.css";
import {Router, Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from "./Components/Home";
import Board from "./Components/Board";
import Chishiki from "./Components/Chishiki";
import Diary from "./Components/Diary";
import Graph from "./Components/Graph";
import Morning from "./Components/Morning";
import Night from "./Components/Night";
import Alldiary from "./Components/Alldiary";
import Timer from "./Components/Timer";

function App() {
  // const [message, setMessage] = useState("");
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   liff
  //     .init({
  //       liffId: import.meta.env.VITE_LIFF_ID
  //     })
  //     .then(() => {
  //       setMessage("LIFF init succeeded.");
  //     })
  //     .catch((e) => {
  //       setMessage("LIFF init failed.");
  //       setError(`${e}`);
  //     });
  // });

  const [timer,setTimer] = useState(0);
  const [timerRunning,setTimerRunning] = useState(true);

  // Night画面のタイマーをスタートさせる関数
  const startTimer = () => {
    setTimerRunning(true);
  };

  // Night画面のタイマーを停止させる関数
  const stopTimer = () => {
    setTimerRunning(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />}/>
        <Route path={`/Board`} element={<Board />}/>
        <Route path={`/Chishiki`} element={<Chishiki />}/>
        <Route path={`/Diary`} element={<Diary />}/>
        <Route path={`/Graph`} element={<Graph />}/>
        <Route path={`/Morning`} element={<Morning timer={timer} />}/>
        <Route path={`/Night`} element={<Night timer={timer}
                                                setTimer={setTimer}
                                                timerRunning={timerRunning}
                                                startTimer={startTimer}
                                                stopTimer={stopTimer}/>}/>
        <Route path={`/Alldiary`} element={<Alldiary />} />
        <Route path={`/Timer`} element={<Timer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
