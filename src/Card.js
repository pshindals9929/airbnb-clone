import React from "react";
import "./Card.css";

function Card({ number }) {
  const { img, title, description } = number;
  return (
    <div className="card">
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPAIWXvywvVcGSPIQapwr8ZV4t1NHfLl-7HQ&usqp=CAU' alt="test" />
      <div className="footer">
        {console.log(title)}
        <h2>{title}</h2>
        <h5>{description} </h5>
      </div>
    </div>
  );
}

export default Card;
