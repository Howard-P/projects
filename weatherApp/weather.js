const apiKey = "89a4e81934667d58dd50fe2b57c47e86";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°F";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    console.log(data);

    switch (data.weather[0].main) {
      case "Clouds":
        weatherIcon.src = "images/clouds.png";
        break;
      case "Clear":
        weatherIcon.src = "images/clear.png";
        break;
      case "Drizzle":
        weatherIcon.src = "images/drizzle.png";
        break;
      case "Humidity":
        weatherIcon.src = "images/humidity.png";
        break;
      case "Mist":
        weatherIcon.src = "images/mist.png";
        break;
      case "Rain":
        weatherIcon.src = "images/rain.png";
        break;
      case "Snow":
        weatherIcon.src = "images/snow.png";
        break;
      case "Wind":
        weatherIcon.src = "images/wind.png";
        break;
      default:
        weatherIcon.src = "images/search.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

//implement 'Enter' key to checkWeather
