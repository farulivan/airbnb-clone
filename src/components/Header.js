import React from "react";
import HeroImg from "../img/hero-img.png"

export default function Header() {
    return (
        <section className="header">
            <img src={HeroImg} alt="some images" />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}