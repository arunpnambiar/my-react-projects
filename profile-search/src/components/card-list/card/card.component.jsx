import React from "react";
import "../card-list.style.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      alt="user-image"
      src={`https://robohash.org/${props.user.id}?set=set2&size=180x180`}
    />
    <h2> {props.user.name} </h2>
    <h3>{props.user.email}</h3>
  </div>
);
