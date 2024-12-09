import React, { useState } from "react";

function Dropbox() {
  const countryCity = {
    Bangladesh: ["Dhaka", "Chitagong"],
    America: ["NYC", "Chicago"],
    China: ["Beijing", "Shanghai"],
  };

  const [country, setCountry] = useState("Bangladesh");
  const [city, setCity] = useState(countryCity["Bangladesh"][0]);

  const countryHandler = (event) => {
    const selectedCountry = event.target.value;
    setCountry(selectedCountry);

    // Set city to the first city of the selected country
    setCity(countryCity[selectedCountry][0]);
  };

  const cityHandler = (event) => {
    setCity(event.target.value);
  };

  return (
    <div>
      {/* Country Dropdown */}
      <select name="country" value={country} onChange={countryHandler}>
        {Object.keys(countryCity).map((country) => (
          <option value={country} key={country}>
            {country}
          </option>
        ))}
      </select>
      <p>Country: {country}</p>

      {/* City Dropdown */}
      <select name="city" value={city} onChange={cityHandler}>
        {countryCity[country].map((city) => (
          <option value={city} key={city}>
            {city}
          </option>
        ))}
      </select>
      <p>City: {city}</p>
    </div>
  );
}

export default Dropbox;
