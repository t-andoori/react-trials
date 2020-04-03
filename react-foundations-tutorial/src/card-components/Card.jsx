import React from "react";

function Card(props) {
  return (
    <div>
      <img className="card-img-top" src={props.featureImage} alt="image" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.link} className="btn btn-primary">
          Learn more
        </a>
      </div>
    </div>
  );
}
export default Card;
