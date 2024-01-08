import React, { useEffect } from 'react';
import "../Style/Morning.css";

function Morning({ timer }) {
  // useEffect(() => {
  //   stopTimer(); // Morning画面がマウントされた時にNight画面のタイマーを停止する
  // }, [stopTimer]);

  return (
    <div className="Morning">
      <h1>おはよう画面</h1>
      <p>停止した時間: {timer}秒</p>
    </div>
  );
}

export default Morning;