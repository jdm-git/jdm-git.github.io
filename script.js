
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
  function drawWeather(){
      
  }



