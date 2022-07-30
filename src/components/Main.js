import React from "react";
import Card from "./Card";
import cardData from "../data";

export default function Main() {
    const cardElements = cardData.map(data => {
        return <Card 
          key={data.id}
          {...data}
        />
    })

    return (
        <main>
            <h2>Experiences you might like</h2>
            <section className="card--list">
                {cardElements}
            </section>
        </main>
    )
};
