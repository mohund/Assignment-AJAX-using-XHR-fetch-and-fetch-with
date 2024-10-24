document.getElementById('search-btn').addEventListener('click', getWeather);

async function getWeather() {
  const city = document.getElementById('city').value;
  const apiKey = 'f72020dcd1fb4033a2170851242410'; 
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1`;  
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    document.querySelector('.City').textContent = `City: ${data.location.name}`;
    document.querySelector('.Temperature').textContent = `Temperature: ${data.current.temp_c} °C`;
    document.querySelector('.Weather').textContent = `Weather: ${data.current.condition.text}`;
    document.querySelector('.Wind').textContent = `Wind: ${data.current.wind_kph} kph`;
    document.querySelector('.Humidity').textContent = `Humidity: ${data.current.humidity} %`;
    document.querySelector('.Pressure').textContent = `Pressure: ${data.current.pressure_mb} mb`;
    
    const high = data.forecast.forecastday[0].day.maxtemp_c;
    const low = data.forecast.forecastday[0].day.mintemp_c;

    document.querySelector('.High').textContent = `High: ${high} °C`;
    document.querySelector('.Low').textContent = `Low: ${low} °C`;

  } catch (error) {
    console.error("Error fetching the weather data:", error);
  }
}
