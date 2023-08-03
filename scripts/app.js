
let currentCity = 'Kigali';


async function getWeatherData() {

  console.log('working...');

  const API_KEY = '71dc665b32d8ad223dd18b7c4d5590f5';// OpenWeather API key 

  const API_KEY_2 = 'b3534703539d436aa6f130323233107';// weather API key

  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${API_KEY}`)

  const data = await response.json();

  console.log(data);

}


document.body.addEventListener('load', getWeatherData());