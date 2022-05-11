import { Link } from "react-router-dom";
import "./Footer.css";
import fb from "../assets/fb.png";
import insta from "../assets/insta.png";

function Footer() {
  return (
    <div className="basdepage">
      <footer>
        <Link to="/contact">Contactez-nous</Link>
        <div>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img src={fb} alt="fb" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src={insta} alt="insta" />
          </a>
        </div>
        <a href="tel:0637867498">06.37.14.74.98</a>
      </footer>
    </div>
  );
}

export default Footer;
