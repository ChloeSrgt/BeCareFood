import "./WallPic.css";
import wall from "../assets/wall.jpg";

export default function WallPic() {
  return (
    <div className="pic">
      <img src={wall} alt="Panier pour faire ses courses" />
    </div>
  );
}
