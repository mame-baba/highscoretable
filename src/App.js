import React, { useState } from "react";
import "./App.css";
import scoreData from "./scoreData";
import HighScoreTable from "./HighScoreTable";
import WorldTable from "./WorldTable";

function App() {
  const [button, setButton] = useState(false);

  const sortedData = scoreData.sort((a, b) => {
    let a1 = a.name;
    let b1 = b.name;
    return a1 < b1 ? -1 : a1 > b1 ? 1 : 0;
  });

  return (
    <div className="App">
      <WorldTable sortedData={sortedData} />
      <button type="button" onClick={() => setButton((button) => !button)}>
        Click-me
      </button>
      {sortedData.map((score) => {
        return <HighScoreTable score={score} button={button} />;
      })}
    </div>
  );
}

export default App;
