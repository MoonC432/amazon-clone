import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://www.freegreatpicture.com/files/199/1774-three-wide-screen-vlad.jpg"
          alt=""
        />

        {basket?.length === 0 ? (
          <div>
            <h2>Your Basket is Empty</h2>
          </div>
        ) : (
          <div className="checkout__title">
            <h2>Your Cart</h2>
          </div>
        )}
        {basket.map((item, i) => (
          <CheckoutProduct
            key={i}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
