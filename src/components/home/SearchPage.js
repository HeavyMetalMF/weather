import main from "../../App.module.css";
import c from "./home.module.css";
import weatherHome from "../../assets/img/weatherHome.png";
import React from "react";

const SearchPage = ({search, sendCity}) => {

    return(
        <div className={main.container}>
            <div className={c.homeWrapper}>
                <div className={c.homeItem}>
                    <img src={weatherHome}/>
                </div>
                <div className={c.homeItem}>
                    <p>The WeatherMan Project</p>
                    <span>Get weather details from all over the world</span>
                </div>
                <div className={c.homeItem}>
                    <input onChange={search} placeholder='Введите местоположение' className={c.cities} type="text"/>
                    <button type="submit" className="btn btn-primary btn-sm" onClick={sendCity}>Check Weather
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SearchPage;