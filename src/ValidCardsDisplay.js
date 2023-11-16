import React from "react";

function ValidCardsDisplay({ validCards }) {
  return (
    <div>
      <h2>Valid Cards</h2>
      <ul>
        {validCards.map((card, index) => (
          <li key={index}>
            {card.cardNumber} - {card.cardHolder} - {card.country.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ValidCardsDisplay;
