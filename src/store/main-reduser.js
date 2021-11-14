import {weatherApi} from "../api/api";

const SET_WEATHER = 'SET_WEATHER';

const initialState = {
    name: null,
    temp_c: null,
    humidity: null,
    days: []
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER:
            return {
                ...state,
                ...action.weather,
                days: [...action.days]
            };
        default:
            return state;
    }
}

export const  setWeatherCreator = (name, temp_c,humidity, days) => {
    return {
        type: SET_WEATHER,
        weather:{
            name, temp_c, humidity
        },
        days: days
    }
}

export const getWeatherThunk = (location, KEY) => {
    return (dispatch) => {
        // debugger
        weatherApi.getWeather(location, KEY).then(
            data => {
                dispatch(setWeatherCreator(
                    data.data.location.name,
                    data.data.current.temp_c,
                    data.data.current.humidity,
                    data.data.forecast.forecastday
                ));

            }
        )
    }
}

export default mainReducer;