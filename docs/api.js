
const resultCity = document.getElementById('city-results')


const getLonLat = (city) => {
    fetch(`https://nominatim.openstreetmap.org/search?q=${city}&format=json`)
        .then(response => {
            if (!response.ok) {
                throw new Error("No se pudo completar la solicitud.");
            }
            return response.json();
        })
        .then(data => {

            createLi(data);


        })
        .catch(error => {
            console.error(error.message);
        });
}







const createLi = (infos) => {
    resultCity.innerHTML = "";
    return infos.map(info => {
        const li = document.createElement("li");
        const arrName = info.display_name.split(",");
        const nameCity = arrName[0];
        const nameDep = arrName.length > 3 ? arrName[1] : "";
        const countryCity = arrName[arrName.length - 1];
        const textVisible = `${nameCity}${nameDep ? `, ${nameDep}` : ""},${countryCity}`;
        li.textContent = textVisible;
        
        li.classList.add("lis")
        li.addEventListener('click', function () {
           
            verInfoCountry(info.lon, info.lat, textVisible)
            setTimeout(mostrarInfo, 1000)
            resultCity.style.display = 'none'
            
        })
        resultCity.appendChild(li);
    })
};



