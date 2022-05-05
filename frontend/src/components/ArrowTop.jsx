/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import arrow from "../assets/arrow.png";

function ArrowTop() {
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <img
      src={arrow}
      className="goTop"
      alt="goTop"
      onClick={() =>
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        })
      }
    />
  );
}

export default ArrowTop;
