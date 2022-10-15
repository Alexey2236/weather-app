import Spiner from "../Spiner";
import "./thisDay.css";

function ThisDay({ dataWeather, icon }) {
  return (
    <div className="this-day">
      {dataWeather !== null ? <View /> : <Spiner />}
    </div>
  );

  function View() {
    let date = new Date().toLocaleString().slice(0, 10);
    return (
      <>
        <div className="wrapper-top">
          <div className="this-temp-wrapper">
            <div className="this-temp">{Math.round(dataWeather.main.temp)}°</div>
            <div className="day">{dataWeather.weather[0].description}</div>
          </div>
          <img src={icon} alt="thisDayIcon" className="weather-icon" />
        </div>
        <div className="wrapper-bottom">
          <div className="time">Дата: {date}</div>
          <div className="cyti">Город: {dataWeather.name}</div>
        </div>
      </>
    );
  }
}

export default ThisDay;
