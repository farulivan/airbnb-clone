import React from "react"
import Star from "../img/star-1.svg"

export default function Card(props) {
    return (
        <section className="card--container">
            <section className="card">
                <img className="card--image" src={require(`../img/${props.img}`)} alt="picture" />
                <div className="card--state">
                    <img src={Star} />
                    <span>{props.rating} •</span>
                    <span>({props.reviewCount})</span>
                    <span>{props.country}</span>
                </div>
                <p>{props.title}</p>
                <p><span>From ${props.price}</span> / person</p>
            </section>
        </section>
    )
}