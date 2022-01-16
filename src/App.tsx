import { useCallback, useState } from "react";
import ItemComponent from "./components/Item";

function App() {
  const [items, setItems] = useState<string[]>([]);

  // Se deixarmos assim, sempre que houver uma alteração no componente,
  // todo o código dessa função será alterado toda vez que for renderizado, mesmo
  // que não aja alteração
  // function handleAddNewsItem()

  // Quando ela fica assim, não irá haver re-render, apenas se
  // um dos valores que está no array de dependencias (no caso nao ha nenhum)
  // for atualizado
  // const handleAddNewsItem = useCallback(() => {

  function handleAddNewsItem() {
    setItems((prev) => [...prev, `Item ${prev.length}`]);
  }

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
