//API CALLS - https://api.polygon.io/v3/reference/tickers?market=fx&active=true&sort=ticker&order=asc&limit=10&apiKey=eyAb2fd39WH4mvQFwCK6otHN9DvAqMQl
import axios from "axios";

export default axios.create({
  baseURL:
    "https://api.polygon.io/v3/reference/tickers?market=fx&active=true&sort=ticker&order=asc&limit=10&apiKey=eyAb2fd39WH4mvQFwCK6otHN9DvAqMQl",
});
