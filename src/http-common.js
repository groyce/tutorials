import axios from "axios";

export default axios.create({
  baseURL: "https://tracker-groyce.pythonanywhere.com/api",
  headers: {
    "Content-type": "application/json"
  }
});

/* "http://localhost:8000/api" */
