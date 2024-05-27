import React from "react";

export const Header = () => {
  return (
    <div className="header__container">
      <h1>保護關係查詢</h1>
      <hr />
      <div className="input__container">
        <span>保戶編號</span>
        <input type="text" />
        <button>查詢</button>
      </div>
      <div>關係圖</div>
    </div>
  );
};
