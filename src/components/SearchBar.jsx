import { Search as SearchIcons } from "react-bootstrap-icons";

function SearchBar({ placeholder, onTextChange }) {
  return (
    <>
      <SearchIcons size={25} className="searchBar__icons" />
      <input
        type="text"
        className="searchBar__input"
        onChange={(e) => onTextChange(e.target.value)}
        placeholder={placeholder}
      />
    </>
  );
}
export default SearchBar;
