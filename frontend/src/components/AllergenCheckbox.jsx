/* eslint-disable react/no-array-index-key */
import React from "react";
import { allergens } from "../data/Allergens";

function AllergenCheckbox() {
  return (
    <div>
      {allergens &&
        allergens.map((allergen, index) => (
          <li key={allergen.name}>
            <input
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
