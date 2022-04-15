import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <Link to="/">
        <img src="src/assets/logo.png" alt="logo" />
      </Link>
      <h1>BeCareFood</h1>
    </header>
  );
}

export default Header;
