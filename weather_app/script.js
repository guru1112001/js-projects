const apiKey="14aa28b18d66cefbe69a884b9fb5a1c5";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?unit=metric&q=delhi";
async function checkWeather(){
    const response=await fetch(apiUrl+ `&appid=${apiKey}`);
    let data=await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML= data.name
    document.querySelector(".temp").innerHTML= data.main.temp+ "°C"
    document.querySelector(".humidity").innerHTML= data.main.humidity
    document.querySelector(".wind").innerHTML= data.wind.speed





} 
checkWeather();
