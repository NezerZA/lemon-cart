import { useState } from "react";
import "./App.css";

export default function App() {
  const [items, setItems] = useState([
    { id: 1, itemName: "Apple", quantity: 6, inCart: false },
    { id: 2, itemName: "Milk", quantity: 1, inCart: false },
    { id: 3, itemName: "Bread", quantity: 2, inCart: false },
    { id: 4, itemName: "Chicken Strips", quantity: 4, inCart: false },
  ]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, inCart: !item.inCart } : item
      )
    );
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItems={handleAddItems} />
      <List
        items={items}
        onToggleItem={handleToggleItem}
        onDeleteItem={handleDeleteItems}
      />
      <Footer items={items} />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>
        <strong>Lemon</strong>Cart 🍋
      </h1>
    </div>
  );
}

function Form({ onAddItems }) {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = { id: Date.now(), itemName, quantity, inCart: false };

    onAddItems(newItem);

    setItemName("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        placeholder="Item..."
        value={itemName}
        type="text"
        onChange={(e) => setItemName(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}

function List({ items, onToggleItem, onDeleteItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <ListItem
            item={item}
            onToggleItem={onToggleItem}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
    </div>
  );
}

function ListItem({ item, onToggleItem, onDeleteItem }) {
  return (
    <li className="item">
      <input
        type="checkbox"
        value={item.inCart}
        onChange={() => onToggleItem(item.id)}
      />
      <span className={item.inCart ? "item-name item-line" : "item-name"}>
        {" "}
        {item.itemName} ({item.quantity})
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
// style={item.packed ? { textDecoration: "line-through" } : {}}
function Footer({ items }) {
  const totItems = items.length;
  const totPackedItems = totItems - items.filter((item) => item.inCart).length;
  const shopPercentage = Math.round((1 - totPackedItems / totItems) * 100);

  return (
    <div className="footer">
      <h3>
        You have {totPackedItems} items left to buy. Shopping{" "}
        <strong
          style={shopPercentage === 100 ? { color: "rgb(1, 206, 42)" } : {}}
        >
          {shopPercentage}%
        </strong>
        {""} done.
      </h3>
    </div>
  );
}
