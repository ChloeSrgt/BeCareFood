/* eslint-disable react/jsx-no-bind */
import { useState } from "react";
import "./AllergenCheckboxes.css";
import AllergenCheckboxesHeader from "./AllergenCheckboxesHeader";
import AllergenCheckbox from "./AllergenCheckbox";

// Filter : Header + Checkboxes
function Filter() {
  // State to show or to hide checkboxes
  const [showCheckboxes, setShowCheckboxes] = useState();
  const [userFilter, setUserFilter] = useState([]);

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
        <AllergenCheckbox
          userFilter={userFilter}
          setUserFilter={setUserFilter}
        />
      </ul>
    </>
  );
}

export default Filter;
