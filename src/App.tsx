import './App.css';
import createItems from "./lib/game.ts";
import Cell from "./components/Cell/Cell.tsx";

const App = () => {
  const gameArr = createItems();
  console.log(gameArr);

  return (
    <>
      <h1>Find x</h1>
      <Cell item={{hasItem: true, clicked: true}} onClick={() => {}} />
    </>
  )
}

export default App;
