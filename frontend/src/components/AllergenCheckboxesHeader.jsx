import "./AllergenCheckboxes.css";

function AllergenCheckboxesHeader(props) {
  const { showCheckboxes, handleCheckboxes } = props;

  return (
    <div className="allergenHeader">
      <h3 className="textAllergic">Vous êtes allergique à :</h3>
      <button
        className="allergenArrow"
        type="button"
        onClick={handleCheckboxes}
      >
        {showCheckboxes ? "⌃" : "⌄"}
      </button>
    </div>
  );
}

export default AllergenCheckboxesHeader;
