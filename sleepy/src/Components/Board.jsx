import "../Style/Board.css";
import React, { useState } from 'react';
import { FaPaperPlane, FaUserCircle } from 'react-icons/fa'; // Icons for user and tweet button

function Board() {
  const [post, setPost] = useState('');
  const [messages, setMessages] = useState([]);

  const handlePostChange = (event) => {
    setPost(event.target.value);
  };

  const handlePostTweet = () => {
    if (post.trim()) {
      const now = new Date();
      const timestamp = `${now.getMonth() + 1}/${now.getDate()} ${now.getHours()}:${now.getMinutes()}`;
      setMessages(prevMessages => [{ content: post, time: timestamp, username: 'UserName' }, ...prevMessages]); // Replace 'UserName' with dynamic username if available
      setPost('');
    }
  };

  return (
    <div className="Board">
      <div className="tweets-container">
        <h1>Twitter-Like Board</h1>
        {messages.map((message, index) => (
          <div key={index} className="tweet">
            <div className="profile-pic"><FaUserCircle /></div>
            <div className="tweet-content">
              <span className="username">{message.username}</span>
              <p>{message.content}</p>
              <div className="tweet-footer">
                <span className="time">{message.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="tweet-input">
        <textarea
          value={post}
          onChange={handlePostChange}
          placeholder="What's happening?"
        />
        <button onClick={handlePostTweet}>
          <FaPaperPlane /> {/* Icon for the tweet button */}
        </button>
      </div>
    </div>
  );
}

export default Board;
