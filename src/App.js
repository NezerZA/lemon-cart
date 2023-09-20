// import { useState } from "react";
import "./App.css";

export default function App() {
  // const [items, setItems] = useState([]);
  const Items = [{ id: 1, itemName: "apple", quantity: 6 }];

  // const initialItems = [
  //   { id: 1, description: "Passports", quantity: 2, packed: false },
  //   { id: 2, description: "Socks", quantity: 12, packed: false },
  // ];

  return (
    <div className="app">
      <Header />
      <Insert />
      <List />
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

function List() {
  return (
    <ul className="list">
      <ListItem />
    </ul>
  );
}

function ListItem() {
  return <li className="item">Item</li>;
}

function Footer() {
  return (
    <div className="footer">
      <h3>Enjoy! Made by Eben Coetzer with React</h3>
    </div>
  );
}
