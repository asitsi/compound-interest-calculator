import React, { useState } from 'react';

const App = () => {
  const [monthlyContribution, setMonthlyContribution] = useState(5000);
  const [annualInterestRate, setAnnualInterestRate] = useState(12);
  const [years, setYears] = useState(12);
  const [futureValue, setFutureValue] = useState(null);

  const calculateFutureValue = () => {
    const timesCompoundedPerYear = 12;
    const rate = annualInterestRate / 100; // Convert percentage to decimal

    const calculatedFutureValue =
      monthlyContribution *
      (((1 + rate / timesCompoundedPerYear) ** (timesCompoundedPerYear * years) - 1) /
        (rate / timesCompoundedPerYear));

    setFutureValue(calculatedFutureValue.toFixed(2));
  };

  return (
    <div>
      <h1>Compound Interest Calculator</h1>
      <label>
        Monthly Contribution (Rupees):
        <input
          type="number"
          value={monthlyContribution}
          onChange={(e) => setMonthlyContribution(Number(e.target.value))}
        />
      </label>
      <br />
      <label>
        Annual Interest Rate (%):
        <input
          type="number"
          value={annualInterestRate}
          onChange={(e) => setAnnualInterestRate(Number(e.target.value))}
        />
      </label>
      <br />
      <label>
        Number of Years:
        <input
          type="number"
          value={years}
          onChange={(e) => setYears(Number(e.target.value))}
        />
      </label>
      <br />
      <button onClick={calculateFutureValue}>Calculate</button>
      {futureValue !== null && (
        <p>
          The future value after {years} years is: {futureValue} rupees
        </p>
      )}
    </div>
  );
};

export default App;

