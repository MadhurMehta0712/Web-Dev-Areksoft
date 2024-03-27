import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-icon-container">
        <img src="src/assets/search.png" alt="Search" className="search-icon" />
      </div>
      <input
        type="text"
        placeholder="              Search for courses, universities and more"
        className="search-input"
      />
      <button className="search-button">Search</button>
    </div>
  );
};

export default SearchBar;
