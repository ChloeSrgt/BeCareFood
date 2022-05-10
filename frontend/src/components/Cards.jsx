/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import "./Cards.css";
// eslint-disable-next-line import/no-unresolved
import Card from "@components/Card";
import MoreProductsButton from "@components/MoreProductsButton";
import ProductContext from "../contexts/ProductContext";
import ArrowTop from "./ArrowTop";
import MoreProductsButton from "./MoreProductsButton";

function Cards() {
  const { filteredProducts, setFilteredProducts, userFilter, products } =
    useContext(ProductContext);

  React.useEffect(() => {
    const withoutAllergens = filteredProducts.filter((p) => {
      let hasAllergen = false;

      if (userFilter.length > 0 && p.ingredients_text_with_allergens_fr) {
        userFilter.forEach((a) => {
          hasAllergen = hasAllergen || p.ingredients_text.includes(a);
        });
      }
      console.log(hasAllergen);

      return !hasAllergen;
    });

    setFilteredProducts(withoutAllergens);
  }, [userFilter, products]);

  return (
    filteredProducts && (
      <div className="productCard">
        {filteredProducts.map((element) => (
          <Card key={element._id} product={element} chosenAllergen={false} />
        ))}

        {products.length > 0 && <MoreProductsButton />}
        {products.length > 0 && <ArrowTop />}
      </div>
    )
  );
}

export default Cards;
