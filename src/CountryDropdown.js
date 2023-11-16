import React, { useState, useEffect } from "react";
import Select from "react-select";
import { countries } from "countries-list";

function CountryDropdown({ selectedCountry, onChange }) {
  const [countryOptions, setCountryOptions] = useState([]);

  useEffect(() => {
    const countryOptionsArray = Object.keys(countries).map((code) => ({
      value: code,
      label: countries[code].name,
    }));
    setCountryOptions(countryOptionsArray);
  }, []);

  const formattedSelectedCountry = selectedCountry
    ? { value: selectedCountry.value, label: selectedCountry.label }
    : null;

  return (
    <div>
      <Select
        options={countryOptions}
        value={formattedSelectedCountry}
        onChange={onChange}
      />
    </div>
  );
}

export default CountryDropdown;
