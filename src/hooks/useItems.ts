import { useState } from 'react'
import { IdType, ItemsType } from '../types';

function useItems() {
  const [items, setItems] = useState<Array<ItemsType>>([]);

  const addItem = (text: string) => {
    const newItem: ItemsType = {
      id: crypto.randomUUID(),
      text,
      timeStamp: Date.now(),
    };

    setItems((prev) => [...prev, newItem]);
  }

  const removeItem = (id: IdType) => {
    setItems((prev) => prev.filter((f) => f.id !== id));
  }

  return { items, addItem, removeItem }
}

export default useItems

// const ITEMS: ItemsType[] = [
//   { id: crypto.randomUUID(), text: "Libros 📚", timeStamp: Date.now() },
//   { id: crypto.randomUUID(), text: "Videojuegos 🎮", timeStamp: Date.now() },
//   { id: crypto.randomUUID(), text: "Películas 🎦", timeStamp: Date.now() },
// ];