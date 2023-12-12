let apiKey = "c2426e77bdc2dd5cec7d06a5a3ac9b1d";
let difKelvin = 273.15;
let url = "https://api.openweathermap.org/data/2.5/weather";

document.getElementById("boton").addEventListener("click", () => {
  const ciudad = document.getElementById("ciudadEntrada").value;
  if (ciudad) {
    fetchDatosClima(ciudad);
  }
});

function fetchDatosClima(ciudad) {
  fetch(`${url}?q=${ciudad}&appid=${apiKey}`)
    .then((response) => response.json())
    .then((response) => mostrarDatosClima(response));
}

function mostrarDatosClima(response) {

  const divDatosClima = document.getElementById("datosClima");
  divDatosClima.innerHTML = "";

  const ciudadNombre = response.name;
  const paisNombre = response.sys.country;
  const temperatura = response.main.temp;
  const descripcion = response.weather[0].description;
  const humedad = response.main.humidity;
  const icono = response.weather[0].icon;
  //.createElemente introduce un h2 o cualuier parametro HTML a la pagina
  const ciudadTitulo = document.createElement("h2");
  ciudadTitulo.textContent = `${ciudadNombre} , ${paisNombre}`;

  const tempInfo = document.createElement("p");
  tempInfo.textContent = `La temperatura es: ${Math.floor(
    temperatura - difKelvin
  )}ºC`;

  const iconoInfo = document.createElement("img");
  iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`;

  const humedadInfo = document.createElement("p");
  humedadInfo.textContent = `La humedad es de: ${humedad}%`;

  const descInfo = document.createElement("p");
  descInfo.textContent = `La descripcion meteorologica es: ${descripcion}`;

  divDatosClima.appendChild(ciudadTitulo);
  divDatosClima.appendChild(tempInfo);
  divDatosClima.appendChild(humedadInfo);
  divDatosClima.appendChild(descInfo);
  divDatosClima.appendChild(iconoInfo);

}
