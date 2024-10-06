import React from "react";

function Rating({ value, text, color }) {

  const items = []

  for(let i = 1; i <= 5; i++){
    items.push(<span>
        <i
          style={{ color }}
          className={
            value >= i
              ? "fas fa-star"
              : value >=  (i - 0.5)
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>)
  }
  return (
    <div className="rating">
    {items.map(item => item)}
    <span>{text && text}</span>
    </div>
  );
}

export default Rating;
