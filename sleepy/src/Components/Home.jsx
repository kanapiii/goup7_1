import "../Style/Home.css";
import { useEffect, useState } from "react";
import liff from "@line/liff";

function Home(){

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    liff
      .init({
        liffId: import.meta.env.VITE_LIFF_ID
      })
      .then(() => {
        setMessage("LIFF init succeeded.");
      })
      .catch((e) => {
        setMessage("LIFF init failed.");
        setError(`${e}`);
      });
  });

  return (
    <div className="Home">
      <h1>group7チーム</h1>
    </div>
  );

}
export default Home;