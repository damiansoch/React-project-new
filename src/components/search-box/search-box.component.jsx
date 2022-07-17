import { Component } from "react";
import "./search-box.component.css";

class SearchBox extends Component {
  render() {
    return (
      <input
        type="search"
        placeholder={this.props.placeholder}
        className={this.props.className}
        onChange={/**/ this.props.OnChangeHandler}
        //this.changeHandler, because it's attached to our class now
      />
    );
  }
}
export default SearchBox;
