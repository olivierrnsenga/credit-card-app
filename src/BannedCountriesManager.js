import React, { useState } from "react";

function BannedCountriesManager({ children }) {
  const [bannedCountries, setBannedCountries] = useState([]);

  const addBannedCountry = (country) => {
    setBannedCountries([...bannedCountries, country]);
  };

  const removeBannedCountry = (country) => {
    setBannedCountries(bannedCountries.filter((c) => c !== country));
  };

  const contextValue = {
    bannedCountries,
    addBannedCountry,
    removeBannedCountry,
  };

  return (
    <BannedCountriesContext.Provider value={contextValue}>
      {children}
    </BannedCountriesContext.Provider>
  );
}

export default BannedCountriesManager;
