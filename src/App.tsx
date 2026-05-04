import './App.css';
import createItems from "./lib/game.ts";
import GameBoard from "./components/GameBoard/GameBoard.tsx";
import { useState } from "react";
import Scoreboard from "./components/ScoreBoard/ScoreBoard.tsx";
import ResetButton from "./components/Button/ResetButton.tsx";

const App = () => {
  const [items, setItems] = useState(createItems());
  const [tries, setTries] = useState(0);

  const handleCellClick = (index: number) => {
    if (items[index].clicked) return;

    const newItems = items.map((item, i) =>
      i === index ? { ...item, clicked: true } : item
    );

    setItems(newItems);
    setTries(prev => prev + 1);
  };

  const resetGame = () => {
    setItems(createItems());
    setTries(0);
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className='main-title'>Find x</h1>
        <div className="content">
          <GameBoard items={items} onCellClick={handleCellClick} />
          <Scoreboard tries={tries} />
          <ResetButton onReset={resetGame} />
        </div>
      </div>
    </div>
  )
}

export default App;
