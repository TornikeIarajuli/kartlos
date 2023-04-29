import React, { useState } from "react";
import axios from "axios";
import "./shipping.css";

function ShippingForm(props) {
  // const [countryId, setCountryId] = useState(0);
  const [city, setCity] = useState("");
  // const [state, setState] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address1, setAddress1] = useState("");
  // const [address2, setAddress2] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  // const [postalCode, setPostalCode] = useState("");
  const [redirectUrl, setRedirectUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      addresInfo: {
        countryId: 1,
        city: city,
        state: "state",
        firstName: firstName,
        lastName: lastName,
        address1: address1,
        address2: "address2",
        phone: phone,
        email: email,
        postalCode: "postalCode",
      },
      orders: [
        {
          productId: props.id,
          quantity: 1,
        },
      ],

      shippingId: 1,
      currencyId: 1,
    };

    axios
      .post("https://kartlos-api.azurewebsites.net/api/orders", data)
      .then((response) => {
        setRedirectUrl(response.data.redirect);
        window.location.href = response.data.redirect;
      })
      .catch((error) => {
        console.log(error);
      });

    // props.onExit();
  };

  const handleExit = () => {
    props.onExit();
  };

  return (
    <div className="popup">
      <h3>შეკვეთა</h3>
      <div className="exit_button" onClick={handleExit}>
        {" "}
        {"\u{2BBE}"}
      </div>
      {redirectUrl && <p>Redirecting to {redirectUrl}...</p>}
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="firstName">სახელი:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="lastName">გვარი:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label htmlFor="address1">მისამართი:</label>
        <input
          type="text"
          id="address1"
          value={address1}
          onChange={(e) => setAddress1(e.target.value)}
        />

        {/* <label htmlFor="address2">მეორე მისამართი:</label>
        <input
          type="text"
          id="address2"
          value={address2}
          onChange={(e) => setAddress2(e.target.value)}
        /> */}

        <label htmlFor="city">ქალაქი:</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        {/* <label htmlFor="state">რეგიონი:</label>
        <input
          type="text"
          id="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />

        <label htmlFor="postalCode">საფოსტო კოდი:</label>
        <input
          type="text"
          id="postalCode"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        /> */}

        {/* <label htmlFor="countryId">ქვეყანა:</label>
        <input
          type="text"
          id="countryId"
          value={countryId}
          onChange={(e) => setCountryId(e.target.value)}
        /> */}

        <label htmlFor="phone">ნომერი:</label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <label htmlFor="email">ელ-ფოსტა:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="orderBtn" type="submit">
          გაგრძელება
        </button>
      </form>

      {/* <button className="closeBtn" onClick={handleExit}>
        დახურვა
      </button> */}
    </div>
  );
}

export default ShippingForm;
