import React from "react"

export default function Card(props) {
    return (
        <section className="card">
            {props.openSpots === 0 && <p className="card--eventstats">SOLD OUT</p>}
            {props.openSpots !== 0 && props.location === "Online" && <p className="card--eventstats">ONLINE</p>}
            <img className="card--image" src={`/img/${props.coverImg}`} alt="picture" />
            <div className="card--stats">
                <img src={`/img/star-1.svg`} />
                <span>{props.stats.rating} •</span>
                <span className="gray">({props.stats.reviewCount})</span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </section>
        
    )
}