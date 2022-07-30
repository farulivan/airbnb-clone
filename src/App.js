import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Card from "./components/Card";
import './style.css';
import cardData from "./data";

export default function App() {
  const cardElements = cardData.map(data => {
    return <Card 
      key={data.id}
      img={data.coverImg}
      rating={data.stats.rating}
      reviewCount={data.stats.reviewCount}
      country={data.location}
      title={data.title}
      price={data.price}
      openSpots={data.openSpots}
    />
  })
  
  return (
    <div className="App">
      <Nav />
      <Header />
      <section className="card--list">
        {cardElements}
      </section>
    </div>
  );
}
