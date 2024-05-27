import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Tree } from "./components/Tree";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (searchValue) => {
    setSearchValue(searchValue);
  };
  return (
    <div className="App">
      <Header onSearch={handleSearch} />
      <Tree searchValue={searchValue} />
    </div>
  );
}

export default App;
