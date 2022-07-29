import React from "react";
import Swimmer from "../img/image-12.png"
import Star from "../img/star-1.svg"

export default function Card() {
    return ( 
        <section className="card--container">
            <section className="card">
                <img className="card--image" src={Swimmer} alt="Katie Zaferes picture" />
                <div className="card--state">
                    <img src={Star} />
                    <span>5.0 •</span>
                    <span>(6)</span>
                    <span>USA</span>
                </div>
                <p>Life lessons with Katie Zaferes</p>
                <p><span>From $136</span> / person</p>
            </section>
        </section>
    )
}