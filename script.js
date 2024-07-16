const API_KEY="5a4023ea121f5c51b9ed3c05d6fa0529";
const API_URL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=allahabad";

async function checkWeather(){
    const response=await fetch(API_URL + `&appid=${API_KEY}`);
    var data =await response.json();
    console.log(data);

    document.querySelector(".current-city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + '°c';
    document.querySelector(".current-weather").innerHTML=data.weather[0].main;
    document.querySelector(".sub-content").innerHTML="Feels like " +Math.round(data.main.feels_like) + '°c';



    document.querySelector(".humidity .value").innerHTML=data.main.humidity + " %";
    document.querySelector(".windspeed .value").innerHTML=data.wind.speed + " km/h";
    document.querySelector(".pressure .value").innerHTML=data.main.pressure;

}

checkWeather();