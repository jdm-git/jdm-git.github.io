
$.ajax({
    url: "https://geolocation-db.com/jsonp",
    jsonpCallback: "callback",
    dataType: "jsonp",
    success: function(location) {
        $.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+location.city+"&APPID=2eab94e68e577bc023a653cc6be04573",
        function(data){
            console.log(data);
        
            var weatherIcon = "http://openweathermap.org/img/wn/"+ data.weather[0].icon + ".png";
            var temperature = data.main.temp;
            var weather = data.weather[0].main;
            
            $('.icon').attr('src', weatherIcon);
            
            $(".city").append(location.city);

            $(".temperature").append(Math.round(temperature-273));
        
            $(".weather").append(weather);
        }
        )
    }
  });
  function checkWeather(){
      let city = (document.getElementById("cityName").value) ? 
      document.getElementById("cityName").value : 
      alert("Brak danych");

    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=2eab94e68e577bc023a653cc6be04573",
    function(data){
        console.log(data);
    
        var weatherIcon = "http://openweathermap.org/img/wn/"+ data.weather[0].icon + ".png";
        var temperature = data.main.temp;
        var weather = data.weather[0].main;
        
        document.getElementsByClassName("icon").setAttribute('src',weatherIcon);
        
        document.getElementsByClassName("city").innerHTML=city;

        document.getElementsByClassName("temperature").innerHTML=Math.round(temperature-273);
    
        document.getElementsByClassName("weather").innerHTML=weather;
    })
  }
  function drawWeather(){
      
  }



