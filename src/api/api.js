import * as axios from "axios";

const instance = axios.create({
    // withCredentials: true,
    baseURL: 'http://api.weatherapi.com/v1/',
    // headers: { 'API-KEY': '8da01c4390264a0791e130559210911' }
})

export const weatherApi = {
    getWeather(location, KEY){
        return instance.get(`forecast.json?key=${KEY}&q=${location}&days=3`)
    },
    log(){
        console.log(instance)
    }
}