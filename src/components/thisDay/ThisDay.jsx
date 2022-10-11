import "./thisDay.css";

function ThisDay({ dataWeather, icon }) {
  let date = new Date().toLocaleString().slice(0, 10);
  return (
    <div className="this-day">
      <div className="wrapper-top">
        <div className="this-temp-wrapper">
          <div className="this-temp">{Math.floor(dataWeather.main.temp)}°</div>
          <div className="day">{dataWeather.weather[0].description}</div>
        </div>
        <img src={icon} alt="thisDayIcon" className="weather-icon" />
      </div>
      <div className="wrapper-bottom">
        <div className="time">Дата: {date}</div>
        <div className="cyti">Город: {dataWeather.name}</div>
      </div>
    </div>
  );
}

export default ThisDay;
