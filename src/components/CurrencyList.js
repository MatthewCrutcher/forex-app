import React from "react";
//CSS
import "./Components.css";
import { useEffect, useState, useContext } from "react";
//API
import axios from "axios";
import api from "./api";
//REACT CONTEXT
import { CurrencyContext } from "../CurrencyContext";

function CurrencyList() {
  const [currencyData, setCurrencyData] = useState([]);
  useEffect(() => {
    const getCurrencyData = async () => {
      const res = await api.get();
      setCurrencyData(res.data.results);
    };

    getCurrencyData();
  }, []);

  const { setCurrencyID } = useContext(CurrencyContext);

  //Mapping through list of currencies
  const mappingCurrencies = currencyData.map((val) => {
    return (
      <ul key={val.currency_symbol}>
        <li>
          <p>AED / {val.currency_symbol}</p>
          <button onClick={() => setCurrencyID(val.currency_symbol)}>
            View
          </button>
        </li>
      </ul>
    );
  });

  return <div className="currency-list">{mappingCurrencies}</div>;
}

export default CurrencyList;
