import React from "react";

const PlayerScore = ({ player }) => {
  return (
    <tr>
      <th>{player.n}</th>
      <th>{player.s}</th>
    </tr>
  );
};
export default PlayerScore;
