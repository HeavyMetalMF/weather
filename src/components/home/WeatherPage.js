import main from "../../App.module.css";
import c from "./home.module.css";
import weatherHome from "../../assets/img/weatherHome.png";
import React from "react";
import cn from "classnames";
import ForecastCart from "../forecast/ForecastCart";


const WeatherPage = (props) => {

    return(
        <div className={main.container}>
            <div className={c.location}>
                <div>
                    <button onClick={props.goBack} type="button" className="btn btn-primary">Go back</button>
                </div>
                Location: {props.name}
            </div>
            <div className={`aos-init p-5 mb-4 bg-light rounded-3 ${c.todayWeather}`}>
                <div className={c.todayWeatherHeader}>
                    <h2 data-aos="fade-up">TODAY'S WEATHER</h2>
                </div>
                <div>
                    <h3 data-aos="fade-up" className={c.todayCurrent}>Current Temperature: {props.temp_c}</h3>
                    <h3 data-aos="fade-up" className={c.todayCurrent}>Humidity: {props.humidity}</h3>
                </div>
            </div>
            <h2 className={cn('text-center', c.forecastUnder)}>FORECAST</h2>
            <div className={c.forecast}>
                {props.days.map(day =>
                    <ForecastCart day={day}/>
                )}
            </div>
        </div>
    )
}

export default WeatherPage;