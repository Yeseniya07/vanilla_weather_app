function displayTemperature(responce) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(responce.data.main.temp);

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = responce.data.name;

  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = responce.data.weather[0].description;

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = responce.data.main.humidity;

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(responce.data.wind.speed);
}
let apiKey = "2acfad573be44e3b6850ce49fb547535";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
