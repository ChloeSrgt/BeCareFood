import oops from "../assets/oups.gif";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div>
      <img className="not-found" src={oops} alt="Oops" />
    </div>
  );
}
