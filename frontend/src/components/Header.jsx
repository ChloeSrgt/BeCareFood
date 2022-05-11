import { useContext } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../contexts/ProductContext";
import "./Header.css";
import logo from "../assets/logo.png";

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
        <img src={logo} alt="logo" />
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
