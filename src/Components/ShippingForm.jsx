import React, { useState, useEffect } from "react";
import "./shipping.css";

function ShippingForm(props) {
  const [city, setCity] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address1, setAddress1] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [redirectUrl, setRedirectUrl] = useState("");

  useEffect(() => {
    const popup = document.getElementsByClassName("popup");

    Array.from(popup).forEach((e) => {
      const width = e.offsetWidth;
      const screenWidth = window.innerWidth;

      const res = (screenWidth - width) / 2;

      e.style.left = res + `px`;

      console.log(res);
    });
    // const width = popup.offsetWidth;
    // const screenWidth = window.innerWidth;

    // const res = (screenWidth - width) / 2;

    // popup.style.left = res + `px`;

    // console.log(res);
  });

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

    fetch("https://kartlos-api.azurewebsites.net/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setRedirectUrl(data.redirect);
        window.location.href = data.redirect;
      })
      .catch((error) => {
        console.log(error);
      });
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

        <label htmlFor="city">ქალაქი:</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

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
