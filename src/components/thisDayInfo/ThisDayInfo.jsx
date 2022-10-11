import "./thisDayInfo.css";
import clouds from "../../assets/img/clouds.png";
import tempicon from "../../assets/img/tempicon.png";
import press from "../../assets/img/press.png";
import precip from "../../assets/img/precip.png";
import wind from "../../assets/img/wind.png";

function ThisDayInfo({ dataWeather }) {
  return (
    <div className="this-day-info">
      <img className="clouds" src={clouds} alt="clouds" />
      <div className="info">
        <div className="wrapper-info">
          <div className="background-icon">
            <img src={tempicon} alt="tempicon" className="temp" />
          </div>
          <div className="title-info">Температура</div>
          <span className="info-descr">
            {Math.floor(dataWeather.main.temp)}° - ощущается как {' '}
            {Math.floor(dataWeather.main.feels_like)}°
          </span>
        </div>
        <div className="wrapper-info">
          <div className="background-icon">
            <img src={press} alt="press" className="temp" />
          </div>
          <div className="title-info">Давление</div>
          <span className="info-descr">
            {dataWeather.main.pressure} мм ртутного столба
          </span>
        </div>
        <div className="wrapper-info">
          <div className="background-icon">
            <img src={precip} alt="precip" className="temp" />
          </div>
          <div className="title-info">Осадки</div>
          <span className="info-descr">
            {dataWeather.weather[0].description}
          </span>
        </div>
        <div className="wrapper-info">
          <div className="background-icon">
            <img src={wind} alt="wind" className="temp" />
          </div>
          <div className="title-info">Ветер</div>
          <span className="info-descr">{dataWeather.wind.speed} м/с</span>
        </div>
      </div>
    </div>
  );
}

export default ThisDayInfo;
