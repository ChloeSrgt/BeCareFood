import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <Link to="/contact">Contactez-nous</Link>
      <div>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <img src="src/assets/fb.png" alt="fb" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <img src="src/assets/insta.png" alt="insta" />
        </a>
      </div>
      <a href="tel:0637867498">06.37.86.74.98</a>
    </footer>
  );
}

export default Footer;
