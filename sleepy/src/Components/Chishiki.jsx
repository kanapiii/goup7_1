import React from "react";
import "../Style/Chishiki.css";

function Chishiki() {
  return (
    <div className="Chishiki">
      <h1>睡眠に関する知識</h1>
      <div className="box">
        <form className="custom-form" noValidate autoComplete="off">
          <div>
            <input
              id="Button"
              rows={4}
              defaultValue="あああああああああああああああああああああああああああああああああああ"
              readOnly
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Chishiki;
