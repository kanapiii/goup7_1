import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // or use useNavigate
import '../Style/diary.css';

function Diary() {
  const [entry, setEntry] = useState('');

  const handleEntryChange = (event) => {
    setEntry(event.target.value);
  };

  const handleSaveEntry = () => {
    const existingEntries = JSON.parse(localStorage.getItem('diaryEntries') || '[]');
    const newEntry = {
      text: entry, // Saving the text of the entry
      date: new Date().toISOString() // Optionally, save the date of the entry
    };
    localStorage.setItem('diaryEntries', JSON.stringify([...existingEntries, newEntry]));
    alert('日記を保存しました！');
    setEntry(''); // Clear the textarea after saving
  };
  

  return (
    <div className="Diary">
      <h1>日記</h1>
      <textarea
        value={entry}
        onChange={handleEntryChange}
        placeholder="日記を書いてね"
      />
      <button onClick={handleSaveEntry}>保存</button>
      <Link to="/AllDiary" className='alldiary'>全ての日記を見る</Link>
    </div>
  );
}

export default Diary;
