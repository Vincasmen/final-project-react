import React, { useState } from "react";

const Form = () => {
  const [countryCode, setCountryCode] = useState("");
  const [year, setYear] = useState("");
  const [holidays, setHolidays] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://holidays.abstractapi.com/v1/?api_key=113e4142b55e4a798b14c4f4d3cc80ec&country=${countryCode}&year=${year}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch holidays");
      }
      const data = await response.json();
      setHolidays(data.response.holidays);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Calendarific API</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Country Code:
          <input
            type="text"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
          />
        </label>
        <br />
        <label>
          Year:
          <input
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Get Holidays</button>
      </form>
      <h3>Holidays:</h3>
      <ul>
        {holidays.map((holiday, index) => (
          <li key={index}>{holiday.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Form;
