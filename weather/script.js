
$.ajax({
    url: "https://geolocation-db.com/jsonp",
    jsonpCallback: "callback",
    dataType: "jsonp",
    success: function(location) {
        $.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+location.city+"&lang=pl&APPID=2eab94e68e577bc023a653cc6be04573",
        function(data){
            console.log(data);
        
            var weatherIcon = "https://openweathermap.org/img/wn/"+ data.weather[0].icon + ".png";
            var temperature = data.main.temp;
            var weather = data.weather[0].description;
            console.log({weatherIcon, temperature, weather});
            document.getElementById("icon").src=weatherIcon;
            document.getElementById("temperature").innerHTML = Math.round(temperature-273)+" &#8451;";
            document.getElementById("weather").innerText = weather;
            document.getElementById("city").innerText = data.name;
        }
        )
        $.getJSON("https://api.openweathermap.org/data/2.5/forecast?q="+location.city+"&lang=pl&appid=2eab94e68e577bc023a653cc6be04573",
        function(forecast){
            console.log(forecast);
            let weatherName;
            let temp;
            let icon;
            let forecastP = document.getElementById("forecast");
            let day;
            console.log(forecast.list[0].weather[0].description);
            for(let i = 0;i<forecast.list.length;i+=8){
                temp = Math.round(forecast.list[i].main.temp-273);
                day = forecast.list[i].dt_txt.substring(0,10);
                icon = "https://openweathermap.org/img/wn/"+ forecast.list[i].weather[0].icon + ".png";
                forecastP.innerHTML+="<div><img src="+icon+">"+temp+"&#8451;</div>";

            }

        }
        )
    }
  });
  function checkWeather(){

    let city = document.getElementById("cityName").value;
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+city+"&lang=pl&APPID=2eab94e68e577bc023a653cc6be04573",
    function(data){
        console.log(data);
    
        var weatherIcon = "https://openweathermap.org/img/wn/"+ data.weather[0].icon + ".png";
        var temperature = data.main.temp;
        var weather = data.weather[0].description;
        
        document.getElementById("icon").src=weatherIcon;
        document.getElementById("temperature").innerHTML = Math.round(temperature-273)+" &#8451;";
        document.getElementById("weather").innerText = weather;
        document.getElementById("city").innerText = data.name;
    })
  }
function checkForecast(){
    let city = document.getElementById("cityName").value;
    document.getElementById("forecast").innerHTML="";
    $.getJSON("https://api.openweathermap.org/data/2.5/forecast?q="+city+"&lang=pl&appid=2eab94e68e577bc023a653cc6be04573",
    function(forecast){
        console.log(forecast);
        let temp;
        let icon;
        let forecastP = document.getElementById("forecast");
        console.log(forecast.list[0].weather[0].description);
        for(let i = 0;i<forecast.list.length;i+=8){
            temp = Math.round(forecast.list[i].main.temp-273);
            icon = "https://openweathermap.org/img/wn/"+ forecast.list[i].weather[0].icon + ".png";
            forecastP.innerHTML+="<div><img src="+icon+">"+temp+"&#8451;</div>";

        }

    }
    )
}
var d = new Date(1580936400);
console.log(d);


