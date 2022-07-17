import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/card-list/card-list.component.jsx";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }
  //eventHandlef function: onChange()
  changeHandler = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    // we need to do it, because includes() is not case sensitive
    this.setState(() => {
      return { searchField };
      //this is actually return{searchField:searchField}
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { changeHandler } = this;
    //we are going this so we dont have to use this and this state every time now /**/

    //creating and filetring the filteren monsters const based on the searchField
    const filteredMonsters = /**/ monsters.filter((monster) => {
      //when going through th array, it will return true or lafse,
      //this will either keep the element or get rid of this
      return monster.name.toLocaleLowerCase().includes(/**/ searchField);
    });
    return (
      <div className="App">
        <h1 className="app-title">Monster Rolodex</h1>
        <SearchBox
          OnChangeHandler={changeHandler}
          placeholder="Search Monsters"
          className="search-box"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
