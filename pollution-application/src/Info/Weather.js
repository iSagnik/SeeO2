import ReactWeather from 'react-open-weather';
import 'react-open-weather/lib/css/ReactWeather.css';
import "../styles/weather-icons.min.css";

/* API key: 0bac44a23a2e832de025a139ce1dea1b */
const key = "0bac44a23a2e832de025a139ce1dea1b";

const WeatherWidget = () => {
    < ReactWeather forecast="today" apikey={key} type="auto" />
}

export default WeatherWidgetimport;