import "../Style/Board.css";
import React, { useState } from 'react';


function Board(){
  const [post, setPost] = useState('');
  const [message, setMessage] = useState('');

  const handlePostChange = (event) => {
    setPost(event.target.value);
  };

  const handlePostTweet = () => {
    if (post.trim()) {
      setMessage('投稿されました: ' + post);
      setPost('');
    } else {
      setMessage('メッセージを入力してください。');
    }
  };
const name="名前表示";
const time="10:10";
const title="タイトル表示";
  return (
    <div className="Board">
      <h1>掲示板</h1>
      <div className="header">
        <div className="circle-image-container">
          <img src="画像パス" alt="アイコン" />
        </div>
        <span className="name">{name}</span>
        <span className="time">{time}</span>
        <span className="title">{title}</span>
        <textarea 
          value={post}
          onChange={handlePostChange}
          placeholder="投稿欄"
        />
        <button onClick={handlePostTweet}>投稿する</button>
        <div className="message">{message}</div>
      </div>
    </div>
  );

}
export default Board;