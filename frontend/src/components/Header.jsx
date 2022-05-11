import { useContext } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../contexts/ProductContext";
import "./Header.css";

function Header() {
  const { setProducts, setSearchValue } = useContext(ProductContext);

  return (
    <header>
      <Link
        to="/"
        onClick={() => {
          setSearchValue("");
          setProducts([]);
        }}
      >
        <img src="src/assets/logo.png" alt="logo" />
      </Link>
      <Link to="/" onClick={() => setProducts([])}>
        <h1> BeCareFood</h1>{" "}
      </Link>
    </header>
  );
}

export default Header;
