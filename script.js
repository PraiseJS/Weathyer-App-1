let weather = {
    apiKey: "71e1f14a9be4780de169edb47cd43153",
    fetchWeather: function (city) {
        fetch(
            "http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid=" + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src = 
        "https://openweathermap.org/img/wn/"+ icon + ".png"
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innertext = temp + "°C";
      document.querySelector(".humidity").innerText = "humidity: " + humidity + "%";
      document.querySelector(".wind").innerText = 
        "windspeed: " + speed + " km/hr";
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button")
.addEventListener("click", function () {
  weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});
