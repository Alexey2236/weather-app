const apiKey = "e863ab03722f3df3122b95e34e8ff925";

const getWeatherThisDay = async (cyty) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cyty}&lang=ru&appid=${apiKey}&units=metric`
  );
  return await response.json().catch((err) => {
    console.log(err);
  });
};

const getWeather7Day = async (cyty) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${cyty}&lang=ru&appid=${apiKey}&units=metric`
  );
  return await response.json().catch((err) => {
    console.log(err);
  });
};

export { getWeatherThisDay, getWeather7Day };
