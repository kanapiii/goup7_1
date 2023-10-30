import "../Style/Board.css";



function Board(){
const name="名前表示";
  return (
    <div className="Board">
      <h1>掲示板</h1>
      <div className="header">
        <div class="circle-image-container">
          <img src="path_to_your_image.jpg" alt="アイコン表示アイコン表示アイコン表示アイコン表示"/>
        </div>
        <span className="name">{name}</span>
        <span className="time">10:14</span>
        <span className="title">sleepy</span>
        {/* 他のヘッダーアイコンや要素 */}
      </div>
    </div>
  );

}
export default Board;