const apiKey = "14aa28b18d66cefbe69a884b9fb5a1c5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search_box = document.querySelector(".search input");
const search_Btn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    }
    else {

        let data = await response.json();
        // console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";


        if (data.weather[0].main == 'Clear') {
            weatherIcon.src = 'images/clear.png';

        }
        else if (data.weather[0].main == 'Clouds') {
            weatherIcon.src = 'images/clouds.png';

        }
        else if (data.weather[0].main == 'Drizzle') {
            weatherIcon.src = 'images/drizzle.png';

        }
        else if (data.weather[0].main == 'Humidity') {
            weatherIcon.src = 'images/humidity.png';

        }
        else if (data.weather[0].main == 'Mist') {
            weatherIcon.src = 'images/mist.png';

        }

        else if (data.weather[0].main == 'Snow') {
            weatherIcon.src = 'images/snow.png';

        }
        else if (data.weather[0].main == 'Wind') {
            weatherIcon.src = 'images/wind.png';

        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
 

    }

}
search_Btn.addEventListener("click", () => {
    checkWeather(search_box.value);
})

// checkWeather("germany");