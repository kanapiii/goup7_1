import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Style/AllDiary.css';

function AllDiary() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem('diaryEntries') || '[]');
    setEntries(savedEntries);
  }, []);

  const handleDelete = (indexToDelete) => {
    const newEntries = entries.filter((_, index) => index !== indexToDelete);
    setEntries(newEntries);
    localStorage.setItem('diaryEntries', JSON.stringify(newEntries));
  };

  return (
    <div className="AllDiary">
      {/* ... */}
      {entries.length === 0 ? (
        <p>No diary entries found.</p>
      ) : (
        <ul>
          {entries.map((entry, index) => (
            <li key={index} className="diary-entry">
              <div className="entry-date"><strong></strong> {new Date(entry.date).toLocaleString()}</div>
              <div className="entry-content">{entry.text}</div>
              <button onClick={() => handleDelete(index)} className="delete-button">削除</button>
            </li>
          ))}
        </ul>
      )}
      <Link to="/Diary">日記を書く</Link>
    </div>
  );
}

export default AllDiary;
