const weather = {
    location :document.querySelector('.location'),
    lat : document.querySelector('.lat'),
    lon : document.querySelector('.lon'),
    desc : document.querySelector('.desc'),    
    humidity : document.querySelector('.humidity'),
    wind : document.querySelector('.wind'), 
    visibility : document.querySelector('.visibility'),  
    temperature : document.querySelector('.temperature'),    
    max_temp : document.querySelector('.max_temp'),  
    min_temp : document.querySelector('.min_temp'),
    feels_like : document.querySelector('.feels_like'),
    weather_image : document.querySelector('.weather_image'),
    date_curr :document.querySelector('.date_curr'),
    
    
    getCityName : function(event) {
        const cityName = document.getElementById("city").value;          
        if((event.keyCode == 13 || event.target.id == "search" ) && (cityName != "" || cityName != null))     
            this.getWeather(cityName);
    },
    getWeather : function(cityName) {        
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=eac7b67b1663ef49da458eb0bb524349')
        .then(response => response.json())
        .then(result => { 
            this.displayWeather(result);
        })
    },
    
    displayWeather : function (result) {
        this.location.innerHTML = result.name+" , "+result.sys.country;
        this.date_curr.innerHTML = new Date(result.dt*1000).toDateString();
        this.lat.innerHTML = result.coord.lat;
        this.lon.innerHTML = result.coord.lon;
        this.desc.innerHTML = result.weather[0].description;            
        this.humidity.innerHTML = result.main.humidity+" %";
        this.wind.innerHTML = Math.ceil(result.wind.speed*(18/5))+" KMPH"; 
        this.visibility.innerHTML = (result.visibility/1000)+" M";
        const cel = parseInt(result.main.temp - 272.15);
        this.temperature.innerHTML = cel+"°C" + " / "+ parseInt(cel * 1.8)+"°F";
        this.max_temp.innerHTML = parseInt(result.main.temp_max - 272.15)+"°C";
        this.min_temp.innerHTML = parseInt(result.main.temp_min - 272.15)+"°C";
        this.feels_like.innerHTML = parseInt(result.main.feels_like - 272.15)+"°C";
       
        this.weather_image.src = "http://openweathermap.org/img/w/"+result.weather[0].icon+ ".png";

        document.getElementById("city").value = "";
    },

   
    
}