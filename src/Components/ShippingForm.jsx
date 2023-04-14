import React, { useState } from "react";
import axios from "axios";

function ShippingForm(props) {
  const [countryId, setCountryId] = useState(0);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(productId);

    const data = {
      addresInfo: {
        countryId: 1,
        city: city,
        state: state,
        firstName: firstName,
        lastName: lastName,
        address1: address1,
        address2: address2,
        phone: phone,
        email: email,
        postalCode: postalCode,
      },
      orders: [
        {
          productId: 4,
          quantity: 1,
        },
      ],

      shippingId: 1,
      currencyId: 1,
    };

    axios
      .post("https://kartlos-api.azurewebsites.net/api/orders", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    props.onExit();
  };

  const handleExit = () => {
    props.onExit();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label htmlFor="address1">Address Line 1:</label>
        <input
          type="text"
          id="address1"
          value={address1}
          onChange={(e) => setAddress1(e.target.value)}
        />

        <label htmlFor="address2">Address Line 2:</label>
        <input
          type="text"
          id="address2"
          value={address2}
          onChange={(e) => setAddress2(e.target.value)}
        />

        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <label htmlFor="state">State:</label>
        <input
          type="text"
          id="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />

        <label htmlFor="postalCode">Postal Code:</label>
        <input
          type="text"
          id="postalCode"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />

        <label htmlFor="countryId">Country ID:</label>
        <input
          type="text"
          id="countryId"
          value={countryId}
          onChange={(e) => setCountryId(e.target.value)}
        />

        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      <button onClick={handleExit}>Exit</button>
    </div>
  );
}

export default ShippingForm;
