import "./App.css";
import { IdType } from "./types";
import { Item } from "./components/item";
import useItems from "./hooks/useItems";
import useSEO from "./hooks/useSEO";

function App() {
  const { items, addItem, removeItem } = useItems();
  useSEO({
    title: `[${items.length}] Prueba técnica React`,
    description: "Añadiendo y borrando elementos de una lista",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { elements } = e.currentTarget;
    const input = elements.namedItem("item");

    const isInput = input instanceof HTMLInputElement; // instaneof returns false if input is null or undefined
    if (!isInput) return;

    addItem(input.value);

    input.value = "";
  };

  const createHandleRemoveItem = (id: IdType) => {
    return () => {
      removeItem(id);
    };
  };

  return (
    <main>
      <aside>
        <h1>Prueba técnica de React</h1>
        <h2>Añadir y eliminar elementos en una lista</h2>
        <form onSubmit={handleSubmit} aria-label="Añadir elementos">
          <label>
            Elemento a introducir: <input type="text" name="item" required />
          </label>
          <button>Añadir elemento en la lista</button>
        </form>
      </aside>
      <section>
        <ul>
          {items.length === 0 ? (
            <p>
              <strong>No tienes elementos en la lista</strong>
            </p>
          ) : (
            items.map((item) => {
              return (
                <Item
                  key={item.id}
                  {...item}
                  handleClick={createHandleRemoveItem(item.id)}
                />
              );
            })
          )}
        </ul>
      </section>
    </main>
  );
}

export default App;
