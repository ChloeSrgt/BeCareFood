/* eslint-disable react/no-array-index-key */
import React from "react";
import { allergens } from "../data/Allergens";
import "./AllergenCheckboxes.css";

function AllergenCheckbox() {
  return (
    <div className="allcheckboxes">
      {allergens &&
        allergens.map((allergen, index) => (
          <li key={allergen.name}>
            <input
              className="checkbox"
              type="checkbox"
              id={`${index}`}
              name={allergen.name}
              value={allergen.name}
            />
            <label htmlFor={`${index}`}>{allergen.name}</label>
          </li>
        ))}
    </div>
  );
}

export default AllergenCheckbox;
