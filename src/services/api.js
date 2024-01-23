import axios from "axios";

export const api = axios.create({
    baseURL: "https://notes-back-end-1s3h.onrender.com",
})