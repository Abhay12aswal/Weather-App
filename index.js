console.log("hlow")

const API_KEY="3717b36f8920461b678b783121fc0e53";

function renderWeatherInfo(data){
        let newpara=document.createElement('p');
        newpara.textContent= `${data?.main?.temp.toFixed(2)} °C`;
    
        document.body.appendChild(newpara)
}

async function fetchWeatherDetials(){

    try{
        let city="kotdwara";

        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
        const data= await response.json();

        console.log("weather data:->", data);
    
        // let newpara=document.createElement('p');
        // newpara.textContent= `${data?.main?.temp.toFixed(2)} °C`
    
        // document.body.appendChild(newpara)
        renderWeatherInfo(data);
    }
    catch(err){
        console.log(err);
    }
}

async function getCustomWeatherDetails(){
    try{
        let latitude=15.6333;
        let longitude=18.333;
    
        let result= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
    
        let data =await result.json();
        console.log(result);
    }
    catch(err){
        //handle the error here
        console.log("Error found",err);
    }
}