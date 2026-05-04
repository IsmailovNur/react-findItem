import './App.css';
import createItems from "./lib/game.ts";

const App = () => {
  const gameArr = createItems();
  console.log(gameArr);

  return (
    <>
      <h1>Find x</h1>
    </>
  )
}

export default App;
