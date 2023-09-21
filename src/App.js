// import { useState } from "react";
import "./App.css";

export default function App() {
  // const [items, setItems] = useState([]);
  const Items = [{ id: 1, itemName: "Apple", quantity: 6, inCart: false }];

  return (
    <div className="app">
      <Header />
      <Insert />
      <List items={Items} />
      <Footer />
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

function Insert() {
  return (
    <form className="add-form">
      <input placeholder="Item..."></input>
      <input placeholder="Quantity..."></input>
      <button>Add</button>
    </form>
  );
}

function List({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <ListItem item={item} />
        ))}
      </ul>
    </div>
  );
}

function ListItem({ item }) {
  return (
    <li className="item">
      <input type="checkbox" />
      <span>{item.itemName}</span>
      <button>❌</button>
    </li>
  );
}

function Footer() {
  return (
    <div className="footer">
      <h3>Enjoy! Made by Eben Coetzer with React</h3>
    </div>
  );
}
