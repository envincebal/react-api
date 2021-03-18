import axios from "axios";

const Axios = axios.create({
  baseURL: "http://abdalwahab.api.com"
});

export default Axios;