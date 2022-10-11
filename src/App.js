import Header from "./components/header/Header";
import CardDayList from "./components/cardDayList/CardDayList";
import ThisDayList from "./components/thisDayList/ThisDayList";
import { useState, useEffect } from "react";
import { getWeather7Day } from "./config";
function App() {
  const [city, setCyty] = useState(() => {
    const saved = localStorage.getItem("key");
    const result = JSON.parse(saved);
    return result || "Москва";
  });
  const [dataWeather7Day, setDataWeather7day] = useState([]);

  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(city));
  }, [city]);

  useEffect(() => {
    getWeatherWeek();
  }, [city]);

  function getCity(value) {
    setCyty(value);
  }

  function getWeatherWeek() {
    getWeather7Day(city)
      .then((data) => setDataWeather7day(data.list))
      .catch((error) => alert(error));
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
