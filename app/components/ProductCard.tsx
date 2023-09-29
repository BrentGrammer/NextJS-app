import React from "react";
import AddToCart from "./AddToCart";
import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <AddToCart />
      {/** this is a client component inside a parent server component. Extract the button with event handling while the layout for the parent will be rendered server side */}
    </div>
  );
};

export default ProductCard;
