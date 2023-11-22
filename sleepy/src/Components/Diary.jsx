import "../Style/Diary.css";


function Diary(){

  return (
    <div className="Diary">
      <h1>今日の日記</h1>
      <div className="diary_area">
        <input type="text" className="text" placeholder="寝る前・起きたときの気持ちを書いてください"/>
      </div>
      <div className="btn_area">
        <button className="btn">送信</button>
      </div>
      <div className="link_area">
        <a href="./Alldiary" className="link">今までの日記</a>
      </div>
    </div>
  );

}
export default Diary;