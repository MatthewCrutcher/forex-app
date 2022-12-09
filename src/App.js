import { useState } from "react";
//Components
import CurrencyList from "./components/CurrencyList";
import Graph from "./components/Graph";
import { CurrencyContext } from "./CurrencyContext";
//CSS
import "./App.css";

function App() {
  const [currencyID, setCurrencyID] = useState("");
  return (
    <div className="container">
      <CurrencyContext.Provider value={{ currencyID, setCurrencyID }}>
        <CurrencyList />
        <Graph />
      </CurrencyContext.Provider>
    </div>
  );
}

export default App;
