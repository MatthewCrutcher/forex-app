import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
//CSS
import "./Components.css";
//Graph Libary
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
//REACT CONTEXT
import { CurrencyContext } from "../CurrencyContext";

const data = [];

function Graph() {
  const [currency, setCurrency] = useState("AUDUSD");
  const [apiData, setApiData] = useState([{}]);
  const { currencyID } = useContext(CurrencyContext);

  useEffect(() => {
    const graphApiCall = async () => {
      const res = await axios.get(
        `https://api.polygon.io/v2/aggs/ticker/C:AUD${currencyID}/prev?adjusted=true&apiKey=eyAb2fd39WH4mvQFwCK6otHN9DvAqMQl`
      );
      console.log(res.data.results);
      console.log(res.data.results[0].c);
      setApiData((prevValue) => [
        ...prevValue,
        {
          name: res.data.results[0].T,
          price: res.data.results[0].c,
        },
      ]);
    };
    graphApiCall();
  }, [currencyID]);

  return (
    <div className="graph-container">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={apiData}
          margin={{
            top: 15,
            right: 15,
            left: 15,
            bottom: 15,
          }}
        >
          {console.log(currencyID)}
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Graph;
