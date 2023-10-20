import "./card.styles.css";
import { Link } from "react-router-dom";

function Card({ id, name, flag, continent }) {
  return (
    <div className="card">
      <img className="image" src={flag} alt="{name}" />

      <div className="card-info">
        <span>{name}</span>
        <p>Continent: {continent} </p>
      </div>
      <Link to={`/detail/${id}`} className="button">
        Detail
      </Link>
    </div>
  );
}

export default Card;
