/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, rating, image }) {
  const [, dispatch] = useStateValue();
  let rat = Array(rating).fill("item");

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {rat.map((_, i) => (
            <p key={i}>⭐ </p>
          ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to cart</button>
    </div>
  );
}

export default Product;
