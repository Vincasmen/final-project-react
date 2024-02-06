import React, { useState } from "react";
import { Months } from "../data";
import "./Folders.css";

const Folders = () => {
  const [selectedMonth, setSelectedMonth] = useState(null);

  return (
    <div className="folders-container">
      <select
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
        className="months-dropdown"
      >
        <option value="">Vyberte měsíc</option>
        {Months.map((month, index) => (
          <option key={index} value={month.name}>
            {month.name}
          </option>
        ))}
      </select>
      <div className="description-container">
        {selectedMonth && (
          <p>
            {Months.find((month) => month.name === selectedMonth).description}
          </p>
        )}
      </div>
    </div>
  );
};

export default Folders;
