import React, { useState } from "react";
import CountryDropdown from "./CountryDropdown";
import "./CardInputForm.css";

function CardInputForm({ onSubmit }) {
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardHolder: "",
    expirationDate: "",
    country: "",
  });

  const handleChange = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  const handleCountryChange = (selectedOption) => {
    setCardDetails({ ...cardDetails, country: selectedOption });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(cardDetails);
  };

  return (
    <form onSubmit={handleSubmit} className="card-input-form">
      <div className="input-container">
        <label htmlFor="cardNumber">Card Number:</label>
        <input
          type="number"
          id="cardNumber"
          name="cardNumber"
          value={cardDetails.cardNumber}
          onChange={handleChange}
          placeholder="Enter Card Number"
          required
          title="Please enter a valid card number"
        />
      </div>
      <div className="input-container">
        <label htmlFor="cardHolder">Card Holder's Name:</label>
        <input
          type="text"
          id="cardHolder"
          name="cardHolder"
          value={cardDetails.cardHolder}
          onChange={handleChange}
          placeholder="Enter Card Holder's Name"
          required
          title="Please enter the card holder's name"
        />
      </div>
      <div className="input-container">
        <label htmlFor="expirationDate">Expiration Date:</label>
        <input
          type="date"
          id="expirationDate"
          name="expirationDate"
          value={cardDetails.expirationDate}
          onChange={handleChange}
          required
          title="Please select the card's expiration date"
        />
      </div>
      <div className="input-container">
        <label htmlFor="country">Select a Country:</label>
        <CountryDropdown
          selectedCountry={cardDetails.country}
          onChange={handleCountryChange}
          required
          title="Please select a country"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default CardInputForm;
