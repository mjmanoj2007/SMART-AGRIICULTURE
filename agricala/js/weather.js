// OpenWeather API logic with caching

const WEATHER_CACHE_KEY = 'agri_weather';
const WEATHER_CACHE_TIME = 1000 * 60 * 30; // 30 minutes

window.initWeather = function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(fetchWeather, handleLocationError);
  } else {
    document.getElementById("weather-location").innerHTML = '<i class="fa-solid fa-location-dot"></i> Geolocation not supported';
  }
};

async function fetchWeather(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  
  // Check cache
  const cached = localStorage.getItem(WEATHER_CACHE_KEY);
  if (cached) {
    const data = JSON.parse(cached);
    if (Date.now() - data.timestamp < WEATHER_CACHE_TIME) {
      updateWeatherUI(data);
      return;
    }
  }

  if (!window.State.offline) {
    try {
      showLoading(true);
      
      // 1. Get City Name using free Reverse Geocoding
      const geoRes = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`);
      const geoData = await geoRes.json();
      const city = geoData.locality || geoData.city || geoData.principalSubdivision || "Unknown Location";

      // 2. Get Weather using free Open-Meteo API
      const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`);
      const weatherData = await weatherRes.json();
      const current = weatherData.current;

      // Extract WMO code and convert to simpler term for our UI
      const wmo = current.weather_code;
      let conditionText = "clouds"; // defaults
      if (wmo === 0 || wmo === 1) conditionText = "clear";
      else if (wmo >= 50 && wmo <= 67) conditionText = "rain";
      else if (wmo >= 71 && wmo <= 77) conditionText = "snow";
      else if (wmo >= 80 && wmo <= 82) conditionText = "rain";
      else if (wmo >= 95) conditionText = "thunderstorm";

      const payload = {
        temp: Math.round(current.temperature_2m),
        humidity: current.relative_humidity_2m,
        wind: current.wind_speed_10m.toFixed(1),
        location: city,
        condition: conditionText,
        timestamp: Date.now()
      };
      
      localStorage.setItem(WEATHER_CACHE_KEY, JSON.stringify(payload));
      showLoading(false);
      updateWeatherUI(payload);
    } catch(e) {
      showLoading(false);
      handleLocationError(e);
    }
  } else {
    handleLocationError(new Error("Offline"));
  }
}

function handleLocationError(error) {
  console.warn("Location error:", error);
  // Fallback to cached or mock Data
  const cached = localStorage.getItem(WEATHER_CACHE_KEY);
  if (cached) {
    updateWeatherUI(JSON.parse(cached));
  } else {
    document.getElementById("weather-location").innerHTML = '<i class="fa-solid fa-location-dot"></i> Unknown Location';
  }
}

function updateWeatherUI(data) {
  document.getElementById("weather-location").innerHTML = `<i class="fa-solid fa-location-dot"></i> ${data.location}`;
  document.getElementById("weather-temp").innerText = `${data.temp}°C`;
  document.getElementById("weather-humidity").innerText = `${data.humidity}%`;
  document.getElementById("weather-wind").innerText = `${data.wind} m/s`;
  
  const iconEl = document.getElementById("weather-icon");
  if(data.condition.includes('rain')) {
    iconEl.className = "fa-solid fa-cloud-rain";
  } else if(data.condition.includes('clear')) {
    iconEl.className = "fa-solid fa-sun text-accent";
  } else {
    iconEl.className = "fa-solid fa-cloud-sun";
  }
  
  generateAIAdvice(data);
}

function generateAIAdvice(data) {
  let advice = "";
  if (data.condition.includes('rain')) {
    advice = window.State.lang === 'ta' ? "மழை வர வாய்ப்புள்ளது. நீர்ப்பாசனத்தை நிறுத்தவும் 🌧️" : "Rain expected. Stop field irrigation 🌧️";
  } else if (data.temp > 35) {
    advice = window.State.lang === 'ta' ? "அதிக வெப்பநிலை. கூடுதல் தண்ணீர் பாய்ச்சவும் ☀️" : "High temperature. Increase watering today ☀️";
  } else if (data.humidity > 80) {
    advice = window.State.lang === 'ta' ? "அதிக ஈரப்பதம். பூச்சித் தாக்குதலைக் கண்காணிக்கவும் 🐛" : "High humidity. Watch out for pests 🐛";
  } else {
    advice = window.State.lang === 'ta' ? "இன்று வானிலை விவசாயத்திற்கு உகந்தது 🌱" : "Optimal weather for farming activities today 🌱";
  }
  
  document.getElementById("weather-advice").innerText = advice;
}
