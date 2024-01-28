console.log("hlow")

const API_KEY="3717b36f8920461b678b783121fc0e53";

async function showWeather(){
    // let latitude= 15.3333;
    // let longitude=74.0833;

    let city="goa";

    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);

    const data= await response.json();
    console.log("weather data:->"+ data);
}