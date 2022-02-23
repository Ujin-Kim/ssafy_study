const axios = require('axios');
const api = axios.create({
    baseURL: 'https://localhost:8091',
})

export const dataLap = {
    get : ()=> {
        return api.get("/data");
    },
    post : ()=> {
        return api.post("/data", data);
    },
    delete : ()=> {
        return api.delete("/data");
    }
}