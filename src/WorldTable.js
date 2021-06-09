import React from "react";
import PlayerScore from "./PlayerScore";

const WorldTable = ({ sortedData }) => {
  let allScores = [];
  for (let i = 0; i < sortedData.length; i++) {
    allScores = allScores.concat(sortedData[i].scores);
  }
  allScores.sort((a, b) => b.s - a.s);
  return (
    <div>
      <table>
        <thead>
          <caption>: World Score</caption>
        </thead>
        <tbody>
          {allScores.map((player) => {
            return <PlayerScore player={player} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
export default WorldTable;
