import Header from "./components/header/Header";
import CardDayList from "./components/cardDayList/CardDayList";
import ThisDayList from "./components/thisDayList/ThisDayList";
import { getWeather7Day } from "./api";
import { useState, useEffect } from "react";
function App() {
  const [city, setCyty] = useState(() => {
    const saved = localStorage.getItem("key");
    const result = JSON.parse(saved);
    if (result !== null && result !== undefined) {
      return result;
    } else {
      return "Москва";
    }
  });
  const [dataWeather7Day, setDataWeather7day] = useState([]);
  function getCity(value) {
    setCyty(value);
  }
  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(city));
  }, [city]);

  useEffect(() => {
    getWeatherWeek();
  }, [city]);

  function getWeatherWeek() {
    getWeather7Day(city)
      .then((data) => setDataWeather7day(data.list))
      .catch((error) => {
        console.log('Ошибка', error);
      });
  }

  return (
    <div className="App">
      <div className="container">
        <Header getCity={getCity} />
        <ThisDayList city={city} />
        <CardDayList dataWeather7Day={dataWeather7Day} />
      </div>
    </div>
  );
}

export default App;
