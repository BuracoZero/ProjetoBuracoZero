import axios from "axios";

export const api = axios.create({
    baseURL: "https://adonis-ydky.onrender.com",
    headers: {
        Accept: 'application/json'
    }
})