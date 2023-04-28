import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/countrySelector.css'
const SelectorCountry = ({ onChange }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('us');

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines/sources?apiKey=fae6904d00e747a8a11f6c6e9b28d7df');
        const countries = response.data.sources
          .filter(source => source.country)
          .map(source => source.country.toLowerCase())
          .filter((value, index, self) => self.indexOf(value) === index);
        setCountries(countries);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCountries();
  }, []);

  const handleCountryChange = event => {
    const country = event.target.value;
    setSelectedCountry(country);
    onChange(country);
  };

  return (
    <div>
      <label htmlFor="country">Select country:</label>
      <select id="country" value={selectedCountry} onChange={handleCountryChange}>
        {countries.map(country => (
          <option key={country} value={country}>
            {country.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectorCountry;
