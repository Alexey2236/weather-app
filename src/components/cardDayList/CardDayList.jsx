import Spiner from "../Spiner";
import "./cardDayList.css";
import sun from "../../assets/img/sun.svg";
import cloudy from "../../assets/img/cloudy.svg";
import rain from "../../assets/img/rain.png";
import smailrun2 from '../../assets/img/smailrun2.png'

import snov from "../../assets/img/snov.png";
import cloudSun from "../../assets/img/cloudSun.png";
import fog from "../../assets/img/fog.png";

function CardDayList({ dataWeather7Day }) {
  let icon;
  const newArr = dataWeather7Day.filter(
    (item) => item.dt_txt.slice(11) === "15:00:00"
  );

  return (
    <>
      <div className="card-list">
        <h4 className="title-card">Прогноз на 5 дней</h4>
        <div className="card-day-list">
          {newArr.length ? (
            newArr.map((item) => {
              switch (item.weather[0].description) {
                case "ясно":
                  icon = sun;
                  break;
                case "пасмурно":
                  icon = cloudy;
                  break;
                case "переменная облачность":
                  icon = cloudy;
                  break;
                case "дождь":
                  icon = rain;
                  break;
                case "небольшой дождь":
                  icon = smailrun2;
                  break;
                case "небольшой снег":
                  icon = snov;
                  break;
                case "облачно с прояснениями":
                  icon = cloudSun;
                  break;
                case "туман":
                  icon = fog;
                  break;
                case "небольшой проливной дождь":
                  icon = smailrun2;
                  break;

                default:
                  icon = cloudy;
              }
              return (
                <div className="card-day-item" key={item.dt}>
                  <div className="day-card">
                    {item["dt_txt"].slice(0, 10).split("-").reverse().join("-")}
                  </div>

                  <div className="temp-day">{Math.round(item.main.temp)}°</div>
                  <span className="temp-like">
                    Ощущается {Math.round(item.main.feels_like)}°
                  </span>

                  <img className="icon-card" src={icon} alt="snov" />

                  <div className="weather-description">
                    {item.weather[0].description}
                  </div>
                  <div className="wind">Ветер {Math.round(item.wind.speed)} м/c</div>
                </div>
              );
            })
          ) : (
            <Spiner />
          )}
        </div>
      </div>
    </>
  );
}

export default CardDayList;
