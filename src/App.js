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
      <Card 
        img="image-12.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price={136}
      />
    </div>
  );
}
