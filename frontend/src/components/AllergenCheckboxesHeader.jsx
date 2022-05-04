function AllergenCheckboxesHeader(props) {
  const { showCheckboxes, handleCheckboxes } = props;

  return (
    <div className="allergenHeader">
      <h3>Vous êtes allergique à :</h3>
      <button type="button" onClick={handleCheckboxes}>
        {showCheckboxes ? "⌃" : "⌄"}
      </button>
    </div>
  );
}

export default AllergenCheckboxesHeader;
