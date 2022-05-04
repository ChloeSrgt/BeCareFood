import load from "../assets/load.gif";

export default function Loading() {
  return (
    <div className="gif">
      <img src={load} alt="Chargement" />
    </div>
  );
}
