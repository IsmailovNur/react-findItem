import type { FC } from "react";

interface ScoreboardProps {
  tries: number;
}

const Scoreboard: FC<ScoreboardProps> = ({tries}) => (
  <div className='scoreboard'>
    <strong>Tries: {tries}</strong>
  </div>
);

export default Scoreboard;