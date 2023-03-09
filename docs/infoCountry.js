const verTemp = document.getElementById('temp')
const verWind = document.getElementById('windSpeed')
const verProba = document.getElementById('precipitation')
const verName = document.getElementById('nameCity')




const verInfoCountry = (log, lat, nombre) => {
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${log}&daily=weathercode,precipitation_probability_max&timezone=auto&current_weather=true`).then(response => {
        if (!response.ok) {
            throw new Error("No se pudo completar la solicitud.");
        }
        return response.json();
    })
        .then(data => {

            hourCity(data.timezone)
            imgAndData(data.daily.weathercode[0] )
            mostrarTemp(data, nombre)
        })
        .catch(error => {
            console.error(error.message);
        });

}

const mostrarTemp = (data, nameCity) => {
    const tempDay = data.current_weather.temperature
    const name = nameCity
    const wind = data.current_weather.windspeed
    const precipitation = data.daily.precipitation_probability_max[0]
    verName.innerHTML = name
    verTemp.innerHTML = tempDay + "°C"
    verWind.innerHTML = wind + "km/h"
    verProba.innerHTML = precipitation + '%'
    console.log(tempDay, wind, precipitation)
}



const horass = document.getElementById('aca')
const hourCity = (timeZoneCity) => {
    horass.innerHTML = ""
    const timeZone = timeZoneCity;
    const date = new Date().toLocaleString("en-US", { timeZone: timeZone, hour12: true, hour: "numeric", minute: "numeric" });
    horass.innerHTML = date
}


const imgAndData = (code) => {
    let img = '';
    let dataImg = '';
  
    switch (code) {
      case 0:
      case 1:
        img = '<i class="fa-solid fa-sun text-9xl p-4"></i>';
        dataImg = 'Clear sky';
        break;
      case 2:
        img = '<i class="fa-solid fa-cloud-sun text-9xl p-4"></i>';
        dataImg = 'Mainly';
        break;
      case 3:
        img = '<i class="fa-solid fa-cloud text-9xl p-4"></i>';
        dataImg = 'Mainly overcast';
        break;
      case 45:
      case 48:
        img = '<i class="fa-solid fa-smog text-9xl p-4"></i>';
        dataImg = 'Fog';
        break;
      case 51:
        img = '<i class="fa-solid fa-cloud-sun-rain text-9xl p-4"></i>';
        dataImg = 'Drizzle';
        break;
      case 53:
      case 55:
      case 56:
      case 57:
      case 63:
      case 65:
        img = '<i class="fa-solid fa-cloud-showers-heavy text-9xl p-4"></i>';
        dataImg = 'Drizzle moderate';
        break;
      case 61:
        img = '<i class="fa-solid fa-cloud-rain text-9xl p-4"></i>';
        dataImg = 'Rain';
        break;
      case 66:
      case 67:
      case 85:
      case 86:
        img = '<i class="fa-solid fa-cloud-meatball text-9xl p-4"></i>';
        dataImg = 'Freezing Rain';
        break;
      case 71:
      case 73:
      case 75:
      case 77:
        img = '<i class="fa-solid fa-snowflake text-9xl p-4"></i>';
        dataImg = 'Snow';
        break;
      case 80:
      case 81:
        img = '<i class="fa-solid fa-cloud-bolt text-9xl p-4"></i>';
        dataImg = 'Rain showers Slight';
        break;
      case 82:
      case 95:
      case 96:
      case 99:
        img = '<i class="fa-solid fa-bolt-lightning text-9xl p-4"></i>';
        dataImg = 'Thunderstorm';
        break;
      default:
        break;
    }
  
    mostrarCosas(img, dataImg);
  };
  
  

 
const dasdasdasd = document.getElementById('imgTime')
 const dasdasd = document.getElementById('infoTime')
const mostrarCosas = (img, dataImg) => {
    dasdasdasd.innerHTML = img
    dasdasd.innerHTML = dataImg

}
