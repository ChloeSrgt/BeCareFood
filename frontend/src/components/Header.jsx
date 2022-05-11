import { useContext } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../contexts/ProductContext";
import "./Header.css";

function Header() {
  const { setProducts, setSearchValue, setUserFilter } =
    useContext(ProductContext);

  return (
    <header>
      <Link
        to="/"
        onClick={() => {
          setSearchValue("");
          setProducts([]);
          setUserFilter([]);
        }}
      >
        <img src="src/assets/logo.png" alt="logo" />
      </Link>
      <Link
        to="/"
        onClick={() => {
          setSearchValue("");
          setProducts([]);
          setUserFilter([]);
        }}
      >
        <h1> BeCareFood</h1>{" "}
      </Link>
    </header>
  );
}

export default Header;
