import "./search-box.component.css";

const SearchBox = ({ OnChangeHandler, placeholder, className }) => {
  return (
    <input
      type="search"
      placeholder={placeholder}
      className={className}
      onChange={/**/ OnChangeHandler}
      //this.changeHandler, because it's attached to our class now
    />
  );
};

export default SearchBox;
