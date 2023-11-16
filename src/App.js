import React, { useState, useEffect } from "react";
import bannedCountriesData from "./bannedCountries.json";
import CardInputForm from "./CardInputForm";
import ValidCardsDisplay from "./ValidCardsDisplay";
import { countries } from "countries-list"; // Import countries-list library

function App() {
  const [validCards, setValidCards] = useState([]);
  const bannedCountries = bannedCountriesData.bannedCountries;

  useEffect(() => {
    const storedCards = JSON.parse(sessionStorage.getItem("validCards")) || [];
    setValidCards(storedCards);
  }, []);

  // Function to convert ISO code to country name
  const getCountryName = (isoCode) => {
    const countryData = countries[isoCode];
    if (countryData) {
      return countryData.name;
    }
    return null;
  };

  // Check if the country is banned based on ISO code
  const isCountryBanned = (isoCode) => {
    const countryName = getCountryName(isoCode);
    if (countryName) {
      return bannedCountries.includes(countryName);
    }
    return false;
  };

  const handleCardSubmit = (cardData) => {
    const cardCountry = cardData.country.value; // Get the ISO code of the card's country

    if (isCountryBanned(cardCountry)) {
      alert("This card is from a banned country.");
      return;
    }

    const existingCards =
      JSON.parse(sessionStorage.getItem("validCards")) || [];
    if (
      !existingCards.find((card) => card.cardNumber === cardData.cardNumber)
    ) {
      const updatedCards = [...existingCards, cardData];
      sessionStorage.setItem("validCards", JSON.stringify(updatedCards));
      setValidCards(updatedCards);
    } else {
      alert("This card has already been captured.");
    }
  };

  return (
    <div className="App">
      <CardInputForm onSubmit={handleCardSubmit} />
      <ValidCardsDisplay validCards={validCards} />
    </div>
  );
}

export default App;
