import React, { useState, useEffect } from "react";

// Functional component to display stock price and quantity
function StockCounter() {
  const [price, setPrice] = useState(0); // Initial stock price
  const [quantity, setQuantity] = useState(0); // Initial stock quantity
  const [status, setStatus] = useState(""); // To display the status on the screen

  const sol1 = process.env.REACT_APP_SOL1; // Get solution 1 from environment variables
  const sol2 = process.env.REACT_APP_SOL2; // Get solution 2 from environment variables

  // useEffect to run once when the component mounts
  useEffect(() => {
    setStatus("Stock Counter Loaded.");
  }, []);

  // useEffect to track changes in price
  useEffect(() => {
    setStatus(`Price changed: Price = $${price}, Quantity = ${quantity}`);
  }, [price]);

  // useEffect to track changes in quantity
  useEffect(() => {
    setStatus(`Quantity changed: Price = $${price}, Quantity = ${quantity}`);
  }, [quantity]);

  // useEffect to track changes in both price and quantity
  useEffect(() => {
    setStatus(
      `Price or Quantity changed: Price = $${price}, Quantity = ${quantity}`
    );
  }, [price, quantity]);

  // useEffect to update status whenever price or quantity changes (catch-all)
  useEffect(() => {
    setStatus(
      `Price or Quantity changed: Price = $${price}, Quantity = ${quantity}`
    );
  });

  // useEffect for cleanup when the component unmounts
  useEffect(() => {
    return () => {
      setStatus("Stock Counter Unloaded.");
    };
  }, []);

  return (
    <div className="counter">
      <h1>Stock Counter (Functional)</h1>
      <p>
        <strong>Placing the .env File:</strong> {sol1}
      </p>
      <p>
        <strong>Resolving dotenv Issues:</strong> {sol2}
      </p>
      <h2>Price: ${price}</h2>
      <h2>Quantity: {quantity}</h2>
      <button onClick={() => setPrice(price + 1)}>Increase Price</button>
      <button onClick={() => setPrice(price - 1)}>Decrease Price</button>
      <br />
      <button onClick={() => setQuantity(quantity + 1)}>
        Increase Quantity
      </button>
      <button onClick={() => setQuantity(quantity - 1)}>
        Decrease Quantity
      </button>

      {/* Display the status of the component */}
      <div className="status">
        <p>{status}</p>
      </div>
    </div>
  );
}

export default StockCounter;
