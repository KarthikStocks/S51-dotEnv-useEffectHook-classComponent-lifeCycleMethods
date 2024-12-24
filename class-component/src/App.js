import { useState } from "react";
import "./App.css";
import StockCounter from "./components/StockCounter"; // Functional component
import StockCounterClass from "./components/StockCounterClass"; // Class-based component

function App() {
  const [show, setShow] = useState(true); // State to control showing/hiding of the component

  return (
    <div className="App">
      <button
        onClick={() => {
          setShow(!show); // Toggle between showing and hiding the component
        }}
      >
        Load/Unload Component
      </button>
      <br />

      <div className="counter-container">
        <div className="component-box">
          {show && <StockCounter />}
          {/* Render StockCounter functional component */}
        </div>
        <div className="component-box">
          {show && <StockCounterClass />}
          {/* Render StockCounterClass class-based component */}
        </div>
      </div>
    </div>
  );
}

export default App;
