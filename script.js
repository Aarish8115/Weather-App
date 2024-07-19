const API_KEY="5a4023ea121f5c51b9ed3c05d6fa0529";
const API_URL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

btn=document.querySelector(".search-btn button");
userInput=document.querySelector(".search input");

days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saterday']
months=['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec']

async function checkWeather(city){
    const response=await fetch(API_URL + city + `&appid=${API_KEY}`);
    var data =await response.json();
    const date1=new Date();
    console.log(data);
    document.querySelector(".current-city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + '°c';
    document.querySelector(".current-weather").innerHTML=data.weather[0].description.slice(0,1).toUpperCase() + data.weather[0].description.slice(1);
    document.querySelector(".sub-content").innerHTML="Feels like " +Math.round(data.main.feels_like) + '°c';
    document.querySelector(".current-date").innerHTML=`${days[date1.getDay()]}, ${months[date1.getMonth()]} ${date1.getDate()} at 4:57 AM`
    

    const date2= new Date(data.sys.sunrise*1000);
    const date3= new Date(data.sys.sunset*1000);
    document.querySelector(".humidity .value").innerHTML=data.main.humidity + " %";
    document.querySelector(".windspeed .value").innerHTML=data.wind.speed + " km/h";
    document.querySelector(".time-sunrise").innerHTML=date2.getHours()+":"+date2.getMinutes() + " AM";
    document.querySelector(".time-sunset").innerHTML=date3.getHours()+":"+date3.getMinutes() + " PM";
    document.querySelector(".clouds .value").innerHTML=data.clouds.all + " %";
    document.querySelector(".max-value").innerHTML=Math.ceil(data.main.temp_max) + " °C";
    document.querySelector(".min-value").innerHTML=Math.floor(data.main.temp_min) + " °C";
    document.querySelector(".pressure .value").innerHTML=data.main.pressure + " hPa";
    document.querySelector(".weather-icon").innerHTML=`<img src="/images/${data.weather[0].main}.png" >`;
    document.querySelector("body").style.backgroundImage=`url(/backgrounds/${data.weather[0].main}.jpg)`
    // console.log(`url(/background/${data.weather[0].main}.jpg)`)
}

checkWeather("austria");

btn.addEventListener("click",()=>{
    checkWeather(userInput.value);
})
