import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { Link } from "react-router-dom";

function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <Link to="/">
          <img
            className="checkout__ad"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/onsite/Apr18/PeX_1500x200._CB1198675309_.jpg"
            alt=""
          />
        </Link>

        <h3>Hello {user ? user.email : "Guest"}</h3>
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
