
$.ajax({
    url: "https://geolocation-db.com/jsonp",
    jsonpCallback: "callback",
    dataType: "jsonp",
    success: function(location) {
        $.getJSON("https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q="+location.city+"&APPID=2eab94e68e577bc023a653cc6be04573",
        function(data){
            console.log(data);
        
            var weatherIcon = "https://cors-anywhere.herokuapp.com/https://openweathermap.org/img/wn/"+ data.weather[0].icon + ".png";
            var temperature = data.main.temp;
            var weather = data.weather[0].main;
            console.log({weatherIcon, temperature, weather});
            document.getElementById("icon").src=weatherIcon;
            document.getElementById("temperature").innerHTML = Math.round(temperature-273)+" &#8451;";
            document.getElementById("weather").innerText = weather;
            document.getElementById("city").innerText = location.city;
        }
        )
    }
  });
  function checkWeather(){

    let city = document.getElementById("cityName").value;
    $.getJSON("https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=2eab94e68e577bc023a653cc6be04573",
    function(data){
        console.log(data);
    
        var weatherIcon = "https://cors-anywhere.herokuapp.com/https://openweathermap.org/img/wn/"+ data.weather[0].icon + ".png";
        var temperature = data.main.temp;
        var weather = data.weather[0].main;
        
        document.getElementById("icon").src=weatherIcon;
        document.getElementById("temperature").innerHTML = Math.round(temperature-273)+" &#8451;";
        document.getElementById("weather").innerText = weather;
        document.getElementById("city").innerText = city;
    })
  }
  function drawWeather(){
      
  }



