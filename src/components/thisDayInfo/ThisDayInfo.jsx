import "./thisDayInfo.css";
import clouds from "../../assets/img/clouds.png";
import tempicon from "../../assets/img/tempicon.png";
import press from "../../assets/img/press.png";
import precip from "../../assets/img/precip.png";
import wind from "../../assets/img/wind.png";
import Spiner from "../Spiner";

function ThisDayInfo({ dataWeather }) {
  return (
    <div className="this-day-info">
      {dataWeather !== null ? <View /> : <Spiner />}
    </div>
  );

  function View() {
    return (
      <>
        <img className="clouds" src={clouds} alt="clouds" />
        <div className="info">
          <div className="wrapper-info">
            <div className="background-icon">
              <img src={tempicon} alt="tempicon" className="temp" />
            </div>
            <div className="title-info">Температура</div>
            <span className="info-descr">
              {Math.round(dataWeather.main.temp)}° - ощущается как{" "}
              {Math.round(dataWeather.main.feels_like)}°
            </span>
          </div>
          <div className="wrapper-info">
            <div className="background-icon">
              <img src={press} alt="press" className="temp" />
            </div>
            <div className="title-info">Влажность</div>
            <span className="info-descr">{dataWeather.main.humidity}%</span>
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
      </>
    );
  }
  
}


export default ThisDayInfo;
