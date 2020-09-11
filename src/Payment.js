import React, { useState, useEffect } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";

function Payment() {
  const history = useHistory();
  const [{ basket, user }] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [address, setAddress] = useState({
    city: "",
    streetNumber: "",
    houseNumber: "",
  });
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer .
    const getClientSecret = async () => {
      const response = await axios({
        methos: "post",
        //   stripe expects the total in a currencies subunits. ergo times 100
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
  }, [basket]);

  const handleSubmit = async (event) => {
    //   Srtipe Functionality goes here
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymetnIntent = payment configuration

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        history.replaceState("/orders");
      });
  };

  const handleChange = (event) => {
    setDisabled(event.emppy);
    setError(event.error ? event.error.message : "");
  };
  return (
    <div className="payment">
      <div className="payment__section">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length || 0} Items </Link>)
        </h1>
        {/* delivery address */}
        <div className="payment__sectionAddress">
          <h3>Delivery Address</h3>
          <p>Customer : {user?.email || "Annonymous"}</p>
          <input
            placeholder="City"
            onChange={(event) => setAddress({ city: event.target.value })}
          />
          <input
            placeholder="Street Number"
            onChange={(event) =>
              setAddress({ streetNumber: event.target.value })
            }
          />
          <input
            placeholder="House Number"
            onChange={(event) =>
              setAddress({ houseNumber: event.target.value })
            }
          />
        </div>
        {/* Review items */}
        <div className="payment__sectionReview">
          <h3>Review Items And Delivery</h3>
          <div className="payment__sectionReviewItems">
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
        </div>
        {/* payment method */}
      </div>
      <div className="payment__sectionMethod">
        <h3>Payment Method</h3>
        <div className="payment__sectionMethodDetails">
          <form onSubmit={handleSubmit}>
            <CardElement onCHange={handleChange} />
            <div className="payment__priceContainer">
              <CurrencyFormat
                renderText={(value) => <h3>Order Total : {value}</h3>}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
              <button disabled={processing || disabled || succeeded}>
                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
              </button>
              <div>
                {/* Check for errors */}
                {error && <div>{error}</div>}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;
