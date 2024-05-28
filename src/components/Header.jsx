import React, { useState } from "react";

export const Header = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (value === "" || (value.length <= 10 && /^\d+$/.test(value))) {
      setInputValue(value);
    } else {
      alert("請輸入10位數的保戶編號");
    }
  };

  const handleSearch = () => {
    if (inputValue.length === 10) onSearch(inputValue);
    else alert("請輸入10位數的保戶編號");
    setInputValue("");
  };

  return (
    <div className="header__container">
      <h1 onClick={() => window.location.reload()}>保護關係查詢</h1>
      <hr />
      <div className="input__container">
        <span>保戶編號</span>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="input__box"
        />
        <button onClick={handleSearch}>查詢</button>
      </div>
      <div>關係圖</div>
    </div>
  );
};
