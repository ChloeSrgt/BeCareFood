/* eslint-disable react/no-array-index-key */
import { React, useContext } from "react";
import ProductContext from "../contexts/ProductContext";
// import { allergens } from "../data/Allergens";

function AllergenCheckbox({ allergen }) {
  const { setUserFilter, products, setFilteredProducts } =
    useContext(ProductContext);
  function handleChange(e) {
    setFilteredProducts(products);
    if (e.target.checked) {
      setUserFilter((f) => [...f, e.target.value]);
    } else {
      setUserFilter((f) => f.filter((element) => element !== e.target.value));
      // console.log(userFilter);
    }
  }

  /* function addUserFilter() {
    setUserFilter((filt) => [...filt, ...allergens.name]);
  } */

  return (
    <li key={allergen.id}>
      <input
        type="checkbox"
        id={`${allergen.id}`}
        name={allergen.name}
        value={allergen.searchTerm}
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor={`${allergen.id}`}>{allergen.name}</label>
    </li>
  );
}

export default AllergenCheckbox;
