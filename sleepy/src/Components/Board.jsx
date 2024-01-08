import "../Style/Board.css";
import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

function Board() {

  const data = [
    "テスト1",
    "テスト2",
    "テスト3",
    "テスト4",
    "テスト5",
    "テスト6",
    "テスト6",
    "テスト7",
    "テスト8"

  ]

  return (
    <div className="Board">
      <h1>掲示板</h1>
      <div className="area">
        <div className="box_area">
          {/* 配列の要素をマップしてboxを作成 */}
          {data.map((item, index) => (
            <div className="box" key={index}>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="tweet-input">
        <textarea
          placeholder="メッセージを入力"
        />
        <button>
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
}

export default Board;
