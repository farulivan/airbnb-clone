import React from "react";

export default function Header() {
    return (
        <header>
            <div className="header--text">
                <h1>Unforgettable activities hosted by locals</h1>
                <p>Every day, Hosts offer unique stays and experiences that make it possible for guests to connect with communities in a more authentic way</p>
            </div>
            <div className="header--imgContainer">
                <img className="header--img" src="/img/bali.jpg" alt="some images" />
            </div>
        </header>
    )
}