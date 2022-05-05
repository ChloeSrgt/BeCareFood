/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import "./Cards.css";
import Card from "@components/Card";
import ProductContext from "../contexts/ProductContext";

function Cards() {
  const { filteredProducts, setFilteredProducts, userFilter } =
    useContext(ProductContext);

  React.useEffect(() => {
    const withoutAllergens = filteredProducts.filter((p) => {
      let hasAllergen = false;

      if (userFilter.length > 0 && p.ingredients_text_with_allergens_fr) {
        console.log(p.ingredients_text_with_allergens_fr);
        userFilter.forEach((a) => {
          hasAllergen = hasAllergen || p.ingredients_text.includes(a);
        });
      }

      return !hasAllergen;
    });

    setFilteredProducts(withoutAllergens);
  }, [userFilter]);

  return (
    filteredProducts && (
      <div className="productCard">
        {filteredProducts.map((element) => (
          <Card key={element._id} product={element} chosenAllergen={false} />
        ))}
      </div>
    )
  );
}

export default Cards;
