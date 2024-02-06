// Form.js
import React, { useState, useEffect } from "react";
import "./Form.css";

const Form = () => {
  const [countryCode, setCountryCode] = useState("");
  const [year, setYear] = useState("2023");
  const [holidays, setHolidays] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await fetch(
        `https://holidayapi.com/v1/countries?key=e7a55ee2-5467-424c-9eff-91f10ad7649d`
      );
      const data = await response.json();
      setCountries(data.countries);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://holidayapi.com/v1/holidays?key=e7a55ee2-5467-424c-9eff-91f10ad7649d&country=${countryCode}&year=${year}`
      );
      const data = await response.json();
      setHolidays(data.holidays);
    } catch (error) {
      console.error("Error fetching holidays:", error);
    }
  };

  return (
    <div className="form-container">
      {" "}
      <form onSubmit={handleSubmit}>
        <label>
          Select Country:
          <select
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
          >
            <option value="">Select Country</option>
            {countries.map((country, index) => (
              <option key={index} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Year:
          <input type="number" value={year} readOnly />
        </label>
        <button type="submit">Fetch Holidays</button>
      </form>
      {holidays.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {holidays.map((holiday, index) => (
              <tr key={index}>
                <td>{holiday.name}</td>
                <td>{holiday.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Form;
