/* eslint-disable react/jsx-no-bind */
import { useState } from "react";
import "./AllergenCheckboxes.css";
import AllergenCheckboxesHeader from "./AllergenCheckboxesHeader";
import AllergenCheckbox from "./AllergenCheckbox";
import { allergens } from "../data/Allergens";

// Filter : Header + Checkboxes
function Filter() {
  // State to show or to hide checkboxes
  const [showCheckboxes, setShowCheckboxes] = useState();
  // const { userFilter, setUserFilter } = useContext(ProductContext);

  function handleCheckboxes() {
    setShowCheckboxes(!showCheckboxes);
  }

  return (
    <>
      <AllergenCheckboxesHeader
        showCheckboxes={showCheckboxes}
        handleCheckboxes={handleCheckboxes}
      />
      <ul
        className={
          showCheckboxes ? "allergenCheckboxOn" : "allergenCheckboxOff"
        }
      >
        <div>
          {allergens.map((element) => (
            <AllergenCheckbox key={element.id} allergen={element} />
          ))}
        </div>
      </ul>
    </>
  );
}

export default Filter;
