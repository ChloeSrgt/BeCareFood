import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <Link to="/">
        <img src="src/assets/logo.png" alt="logo" />
      </Link>
      <Link to="/">
        <h1> BeCareFood</h1>{" "}
      </Link>
    </header>
  );
}

export default Header;
