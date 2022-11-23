import React, { useEffect, useState } from "react";
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

const data = [];

function Graph() {
  const [currency, setCurrency] = useState("AUDUSD");
  const [apiData, setApiData] = useState([
    {
      name: "Page A",
      price: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      price: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      price: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      price: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      price: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      price: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      price: 3490,
      pv: 4300,
      amt: 2100,
    },
  ]);

  useEffect(() => {
    const graphApiCall = async () => {
      const res = await axios.get(
        `https://api.polygon.io/v2/aggs/ticker/C:${currency}/prev?adjusted=true&apiKey=eyAb2fd39WH4mvQFwCK6otHN9DvAqMQl`
      );
      console.log(res.data.results);
      console.log(res.data.results[0].c);
      setApiData((prevValue) => [
        ...prevValue,
        {
          name: res.data.results[0].T,
          price: res.data.results[0].c,
          pv: 4800,
          amt: 2200,
        },
      ]);
    };
    graphApiCall();
  }, []);

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
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Graph;
