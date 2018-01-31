# Weather
you can grab also the weather from this api using three parameters:

Your API key key
Longitude lon
Latitude lat
example
```
$.get("https://wethrapi.herokuapp.com/weather?lon=[longitude]&lat=[latitude]", 
  function (data) {
      console.log(data)
   });
```
would return the object you'd receive from openweathermap api as it downloads the data and sends it to you the improvement is that it is on an https secure connection not like the openweathermap http one which would work perfectly with the navigator web api
