��#   A P I 
 
 
Didn't make UI for recieving data from the endpoint. Data retrived is in {error:boolean. data:null/object, msg: string} format

localhost:port/api/register // to create an account
localhost:port/api/login    // to login
localhost:port/weather/current?city=cityname // for current weather info
localhost:port/weather/history?city=cityname&from=2023-05-10&to=2023-05-14 (these are example dates) // weather history for given dates
localhost:port/weather/forecast?city=cityname&count=10 //weather forecast for specified number of dates

//route takes ?city=* but can also take lat and lon    Possible to enter just a city name and the programm will find lat and lon on its own


//errors are handled and are traced back through code 

//add .env file that contains API key ->
-> npm install && npm run create && npm run migrate 
-> npm start
->api/register // register
->api/login    // login
->request data // explained in ines 8, 9, and 10
->-> response will be given in json format

HAPPY CODING :D
