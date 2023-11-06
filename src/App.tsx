import { PropsWithChildren, useCallback, useState } from "react";
import "./App.css";

console.log(
  "[App.tsx]",
  `Hello world from Electron ${process.versions.electron}!`
);

interface Card {
  active?: boolean;
  left: number;
  top: number;
  rotate?: number;
  z?: number;
}

interface CardProps extends PropsWithChildren, Card {
  onActiveChange: (v: boolean) => void;
}

const _cards: Card[] = [
  { left: 10, top: 300, rotate: 2 },
  { left: 200, top: 100, rotate: -8 },
  { left: 410, top: 10, rotate: -4, z: 1 },
  { left: 700, top: 140, rotate: 10 },
  { left: 800, top: 300, rotate: -12 },
];

function App() {
  const [cards, setCards] = useState<Card[]>(_cards);

  const onActiveChange = useCallback((v: boolean, index: number) => {
    setCards((cards) => {
      const newCards = [...cards];
      newCards.forEach((card) => (card.active = false));
      newCards[index].active = v;
      return newCards;
    });
  }, []);

  return (
    <div className="stage">
      {cards.map((card, i) => (
        <Card key={i} {...card} onActiveChange={(v) => onActiveChange(v, i)} />
      ))}
    </div>
  );
}

function Card({
  active,
  left,
  top,
  rotate,
  z,
  children,
  onActiveChange,
}: CardProps) {
  const style = {
    width: active ? "100vw" : "240px",
    height: active ? "100vh" : "320px",
    left: `${active ? 0 : left}px`,
    top: `${active ? 0 : top}px`,
    zIndex: active ? 11 : z ?? 0,
    "--rotate": `${active ? 0 : rotate ?? 0}deg`,
  };

  return (
    <div className="card" style={style} onClick={() => onActiveChange(!active)}>
      {children}
    </div>
  );
}

export default App;
