function getWeatherData(x, y) {
    const city = "Austin";
    const latitude = x;
    const longitude = y;
    const url = `https://api.weather.gov/points/${latitude},${longitude}`;
  
    let forecast;
    fetch(url).then(function (response) {
      //going to be a json string
      //parse the json
  
      response.json().then(function (weatherData) {
        forecast = weatherData.properties.forecast;
  
        fetch(forecast).then(function (response) {
          response.json().then(function (newData) {
            for (let index = 0; index < 5; index++) {
              let weatherName = newData.properties.periods[index].name;
              let temperature = newData.properties.periods[index].temperature;
              let shortForecast = newData.properties.periods[index].shortForecast;
  
              const weatherResult = document.querySelector(
                `#weather-result-${index + 1}`
              );
              let weatherNameEl = document.createElement("h3");
              let temperatureEl = document.createElement("p");
              let shortForecastEl = document.createElement("h4");
              weatherNameEl.textContent = weatherName;
              temperatureEl.textContent = temperature;
              shortForecastEl.textContent = shortForecast;
              weatherResult.innerText = "";
              weatherResult.appendChild(weatherNameEl);
              weatherResult.appendChild(temperatureEl);
              weatherResult.appendChild(shortForecastEl);
            }
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            });
          });
        });
      });
    });
  }
  