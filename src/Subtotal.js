import React from "react";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const [{ basket }] = useStateValue();
  const history = useHistory();
  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items):{" "}
        <strong>
          $ {Math.round((getBasketTotal(basket) + Number.EPSILON) * 100) / 100}
        </strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" />
        This order contains a gift
      </small>
      <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
