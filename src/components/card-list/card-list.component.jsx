import "./card-list.component.css";
import Card from "../card/card.component";

const CardList = ({ monsters }) => {
  //we have an access to (props,forawrdRef)
  //forwardRef will be explained later
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
