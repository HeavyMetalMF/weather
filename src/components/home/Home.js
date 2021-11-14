import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {getWeatherThunk} from "../../store/main-reduser";
import AOS from "aos";
import "aos/dist/aos.css";
import SearchPage from "./SearchPage";
import WeatherPage from "./WeatherPage";

const KEY = '8da01c4390264a0791e130559210911';

const Home = (props) => {
    // console.log(props)

    const [location, setLocation] = useState('');
    const [weatherPage, setWeatherPage] = useState(false);

    const search = (e) => {
        setLocation(e.currentTarget.value);
    }

    const goBack = () => {
        setWeatherPage(false);
    }

    const sendCity = () => {
        setWeatherPage(true);
        props.getWeatherThunk(location, KEY);
    }

    useEffect(() => {

    }, [weatherPage])

    useEffect(() => {
        AOS.init();
    }, []);

    return(
        !weatherPage
        ? <SearchPage search={search} sendCity={sendCity}/>
        :  <WeatherPage goBack={goBack}
                        name={props.name}
                        temp_c={props.temp_c}
                        humidity={props.humidity}
                        days={props.days}/>
    )

}
const mapStateToProps = (state) => {
    return {
        name: state.main.name,
        temp_c: state.main.temp_c,
        humidity: state.main.humidity,
        days: state.main.days,
    }
}

export default connect(mapStateToProps,
    {getWeatherThunk})(Home);