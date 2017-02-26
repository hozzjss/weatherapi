const express = require('express')
const request = require('request')
const app = express()
const port = process.env.PORT || 8080

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
})

app.get('/', function(req, res) {
  res.send("Usage: /weather")
})

app.get('/weather', function(req, res) {
  let lon = req.query.lon;
  let lat = req.query.lat;
  let apiReq = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=560c314416cee6b04950e1f5415da8c5`;
  request(apiReq, function(error, response, html) {
    if (!error) {
      console.log(html);
      res.end(html);
    }
  });
});

app.listen(port)
console.log("app running on port", port);
exports = module.exports = app;
