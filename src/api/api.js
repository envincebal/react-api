import axios from "axios";
const API_KEY = "oi1hSplSQS_hI67jQphH7UyZTPrpDo61GLyja7nCFeY";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID " + API_KEY
  }
});

