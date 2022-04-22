import React from "react";
import { useParams } from "react-router-dom";

export default function ProductName() {
  const { idProduct } = useParams();
  return <div>{idProduct}</div>;
}
