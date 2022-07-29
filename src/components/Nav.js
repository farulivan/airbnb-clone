import React from "react";
import AirbnbLogo from "../img/airbnb.svg"

export default function Nav() {
    return (
        <nav>
            <img className="nav--logo" src={AirbnbLogo} alt="airbnb logo" />
        </nav>
    )
}