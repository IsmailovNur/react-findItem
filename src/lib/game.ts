export interface GameCell {
  clicked: boolean;
  hasItem: boolean;
}

const createItems = (): GameCell[] => {
  const items: GameCell[] = [];
  for (let i = 0; i < 36; i++) {
    items.push({hasItem: false, clicked: false});
  }
  const randomIndex = Math.floor(Math.random() * items.length);
  items[randomIndex].clicked = true;

  return items;
};

export default createItems;