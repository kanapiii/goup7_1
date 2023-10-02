import { useEffect, useState } from "react";
import liff from "@line/liff";
import "./App.css";
import {Router, Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from "./Components/Home";

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

  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
