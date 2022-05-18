import axios from "axios";

const httpClient = axios.create({
    baseURL: "https://kamion-interview.herokuapp.com"
});

export default httpClient;
