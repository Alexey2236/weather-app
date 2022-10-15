import ThisDay from "../thisDay/ThisDay";
import ThisDayInfo from "../thisDayInfo/ThisDayInfo";
import { useEffect, useState } from "react";
import { getWeatherThisDay } from "../../api";
import sun from "../../assets/img/sun.svg";
import cloudy from "../../assets/img/cloudy.svg";
import rain from "../../assets/img/rain.png";
import smailrun2 from "../../assets/img/smailrun2.png";
import snov from "../../assets/img/snov.png";
import cloudSun from "../../assets/img/cloudSun.png";
import fog from "../../assets/img/fog.png";

function ThisDayList({ city }) {
  let icon;
  const [dataWeather, setDataWeather] = useState(null);

  function getWeather() {
    getWeatherThisDay(city)
      .then((data) => setDataWeather(data))
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    getWeather();
  }, [city]);

  if (dataWeather !== null) {
    switch (dataWeather.weather[0].description) {
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
      case "плотный туман":
        icon = fog;
        break;

      default:
        icon = cloudy;
    }
  }
  return (
    <div className="this-day-weather">
      <ThisDay dataWeather={dataWeather} icon={icon} />
      <ThisDayInfo dataWeather={dataWeather} />
    </div>
  );
}

export default ThisDayList;
