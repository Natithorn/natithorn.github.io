document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '4b73fdd40b9102eaf896f6e097456085'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data); 
            if (data.cod === 200) {
                const temperature = data.main.temp;
                const humidity = data.main.humidity;
                const windSpeed = data.wind.speed;

                document.getElementById('weatherInfo').innerHTML = `
                <h2>Weather in ${city}</h2>
                <p><i class="fas fa-thermometer-half"></i> Temperature: ${temperature} °C</p>
                <p><i class="fas fa-tint"></i> Humidity: ${humidity} %</p>
                <p><i class="fas fa-wind"></i> Wind Speed: ${windSpeed} m/s</p>
                `;
            } else {
                document.getElementById('weatherInfo').innerHTML = `
                    <p>Error: ${data.message}</p>
                `;
            }
        })
        .catch(error => {
            console.error('Error:', error); 
            document.getElementById('weatherInfo').innerHTML = `
                <p>Could not retrieve weather data. Please try again.</p>
            `;
        });
});
