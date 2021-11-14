import React, {useEffect} from "react";
import c from "./../home/home.module.css";
import AOS from "aos";


const ForecastCart = (props) => {
    console.log(props.day);

    useEffect(() => {
        AOS.init();
    }, []);

    let day = props.day.date.slice(5);
    return (
        <div data-aos="zoom-in" className='aos-init text-center col-md-3 bg-light border rounded-3'>
            <h5>{day}</h5>
            <span>
                <img className={c.snow} src="http://openweathermap.org/img/wn/13d@2x.png"/>
            </span>
            <p>Maximum Temperature: {props.day.day.maxtemp_c}</p>
            <p>Minimum Temperature: {props.day.day.mintemp_c}</p>
            <p>Humidity:</p>
        </div>
    )
}

export default ForecastCart;