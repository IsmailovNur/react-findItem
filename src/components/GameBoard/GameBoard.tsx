import type { GameCell } from "../../lib/game.ts";
import type { FC } from "react";
import Cell from "../Cell/Cell.tsx";
import "./GameBoard.css";

interface GameBoardProps {
  items: GameCell[];
  onCellClick: (index: number) => void;
}

const GameBoard: FC<GameBoardProps> = ({items, onCellClick}) => {
  return (
    <div className='board'>
      {items.map((item, index) => (
        <Cell
          key={index}
          item={item}
          onClick={() => onCellClick(index)}
        />
      ))}
    </div>
  );
};
export default GameBoard;