import axios from "axios";

const instance = axios.create({
    baseUrl: "https://5e79b4b817314d00161333da.mockapi.io",
    headers: {
        "Content-Type": "application/json"
    }
});
export default  instance;