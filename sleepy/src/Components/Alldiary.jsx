import "../Style/Alldiary.css";


function Alldiary(){

  return (
    <div className="Alldiary">
      <h1>今までの日記</h1>
      <div className="diary_area">
        <div className="diary">
          <p>2023-11-17 10:00</p>
          <p>今日はよく寝むれた</p>
        </div>
      </div>
      <div className="link_area">
        <a href="./Diary" className="link">戻る</a>
      </div>
    </div>
  );

}
export default Alldiary;