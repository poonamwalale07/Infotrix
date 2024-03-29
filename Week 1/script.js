let weather={
    "apiKey": "8a325d134d29aa38fb54708d57f80d3a",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid=" 
        + this.apiKey
        )
        .then((response)=> response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText= "Weather in " +  name;
        document.querySelector(".icon").src="http://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C" ;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%" ;
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/hr" ;
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/900x700/?" + name + "')"
    },
    search: function (){
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
};

document.querySelector(".search button").addEventListener("click", function(){
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if (event.key == "Enter"){
        weather.search();
    }
});
// Function to get the current date and time
function getCurrentDateAndTime() {
    const dateTime = new Date();
    return dateTime.toLocaleString();
  }
  
  // Target an HTML element to display the current date and time
  const dateDisplay = document.getElementById("date-time");
  
  // Set the innerHTML of the element to the current date and time returned by the function
  dateDisplay.innerHTML = getCurrentDateAndTime();

weather.fetchWeather("Delhi");

