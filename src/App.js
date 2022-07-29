import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Card from "./components/Card";
import './style.css';

export default function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Header /> */}
      <Card />
    </div>
  );
}
