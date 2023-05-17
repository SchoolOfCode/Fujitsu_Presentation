import React from "react";
import "./RandomItem.css";

function RandomItem(props) {
  return (
    <section className="random-item-section">
      <h2>{props.item.name}</h2>
      <img src={props.item.image} alt={props.item.name} />
      <button
        onClick={(event) => {
          event.preventDefault(); // Prevent the default behavior (page reload)
          props.getRandomItem(); // Call the getRandomItem function passed from the parent component
        }}
      >
        Change me!
      </button>
    </section>
  );
}

export default RandomItem;
