import type { FC } from "react";
import "./ScoreBoard.css"

interface ScoreboardProps {
  tries: number;
}

const Scoreboard: FC<ScoreboardProps> = ({tries}) => (
  <div className='scoreboard'>
    <strong>Tries: <span className='score'>{tries}</span></strong>
  </div>
);

export default Scoreboard;