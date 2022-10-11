const apiKey = "e863ab03722f3df3122b95e34e8ff925";

const getWeatherThisDay = async (cyty) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cyty}&lang=ru&appid=${apiKey}&units=metric`
  );
  return await response.json()
  .catch(er => console.log(er))
};

const getWeather7Day = async (cyty) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${cyty}&lang=ru&appid=${apiKey}&units=metric`
  );
  return await response.json()
  .catch(er => console.log(er))
};

export { getWeatherThisDay, getWeather7Day };


// https://api.openweathermap.org/data/2.5/forecast/daily?q=Moscow&cnt=7lang=ru&appid=e863ab03722f3df3122b95e34e8ff925&units=metric