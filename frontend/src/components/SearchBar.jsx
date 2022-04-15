import "./SearchBar.css";

function SearchBar() {
  return (
    <form className="search">
      <input type="text" placeholder="Rechercher..." />
      <img src="src/assets/search.png" alt="loupe" />
    </form>
  );
}

export default SearchBar;
