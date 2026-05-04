import type { FC } from "react";
import type { GameCell } from "../../lib/game.ts";
import "./Cell.css";

interface CellProps {
  item: GameCell;
  onClick: () => void;
}

const Cell: FC<CellProps> = ({item, onClick}) => {

  const cellClass = item.clicked ? 'cell opened' : 'cell';
  return (
    <span className={cellClass} onClick={onClick}>
      {item.clicked && item.hasItem ? 'x' : ''}
    </span>
  );
};

export default Cell;