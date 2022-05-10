/* eslint-disable react/no-array-index-key */
import { React, useContext } from "react";
import ProductContext from "../contexts/ProductContext";
import "./AllergenCheckboxes.css";

function AllergenCheckbox({ allergen }) {
  const { setUserFilter, products, setFilteredProducts } =
    useContext(ProductContext);
  function handleChange(e) {
    setFilteredProducts(products);
    if (e.target.checked) {
      setUserFilter((f) => [...f, e.target.value]);
    } else {
      setUserFilter((f) => f.filter((element) => element !== e.target.value));
    }
  }

  return (
    <div className="allcheckboxes">
      <li key={allergen.id}>
        <input
          className="checkbox"
          type="checkbox"
          id={`${allergen.id}`}
          name={allergen.name}
          value={allergen.searchTerm}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor={`${allergen.id}`}>{allergen.name}</label>
      </li>
    </div>
  );
}
export default AllergenCheckbox;
