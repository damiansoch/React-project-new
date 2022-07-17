import { Component } from "react";
import "./card.component.css";

class Card extends Component {
  render() {
    const monster = this.props.monster;
    const { name, email, id } = monster;
    return (
      <div className="card-container" key={/*monster.id*/ id}>
        <img
          src={`https://robohash.org/${monster.id}?$set=set&size=180x180`}
          alt={`monster ${/*monster.name*/ name}`}
        />
        <h2>{/*monster.name*/ name}</h2>
        <p>{/*monster.email*/ email}</p>
      </div>
    );
  }
}
export default Card;
