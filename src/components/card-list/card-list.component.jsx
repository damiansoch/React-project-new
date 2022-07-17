import { Component } from "react";
import "./card-list.component.css";
import Card from "../card/card.component";

class CardList extends Component {
  render() {
    const { monsters, id } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card key={id} monster={monster} />;
        })}
      </div>
    );
  }
}
export default CardList;
