import { useCallback, useState } from "react";
import ItemComponent from "./components/Item";

function App() {
  const [items, setItems] = useState<string[]>([]);

  // Se deixarmos assim, sempre que houver uma alteração no componente,
  const handleAddNewsItem = useCallback(() => {
    setItems((prev) => [...prev, `Item ${prev.length}`]);
  }, []);

  return (
    <>
      {items.map((el) => {
        return <ItemComponent key={el} title={el} />;
      })}
      <hr />

      <button onClick={handleAddNewsItem}>Adicionar um novo item</button>
    </>
  );
}

export default App;
