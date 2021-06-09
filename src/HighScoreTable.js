import React from "react";
import PlayerScore from "./PlayerScore";

const HighScoreTable = ({ score, button }) => {
  let descendingScores = score.scores.concat().sort((a, b) => {
    if (a.s > b.s) return -1;
    else return 1;
  });
  let ascendingScores = score.scores.concat().sort((a, b) => {
    if (a.s < b.s) return -1;
    else return 1;
  });

  let sortedScores = button ? ascendingScores : descendingScores;

  return (
    <div>
      <table>
        <thead>
          <caption>High Score: {score.name}</caption>
        </thead>
        <tbody>
          {sortedScores.map((player) => {
            return <PlayerScore player={player} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
export default HighScoreTable;
