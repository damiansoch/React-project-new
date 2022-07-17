import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/card-list/card-list.component.jsx";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState(""); //[value,setValue] = setState(initial value)
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  //useEffect(()=>{},[]) callback function (effect that we want to happend) and array of dependancis (state values or props)
  // wherever the values in the array will change, then i will run the function

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);
  // this will be run when the app loads the first time, amd thats it, because the arrau is empty

  const changeHandler = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    // we need to do it, because includes() is not case sensitive
    setSearchField(searchFieldString);
  };
  useEffect(() => {
    const newFilteredMonsters = /**/ monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(/**/ searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [searchField, monsters]);
  // so in this case we will rub the mapping over monsters, and set up the setFiltered monster only when
  //the search field updates or the monters updates

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
};

export default App;
