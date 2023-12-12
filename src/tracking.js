//Маркер
var Icon = L.icon({
  iconUrl: "marker.png",
  iconSize: [50, 50],
  iconAnchor: [25, 33],
  popupAnchor: [50, 50],
});
//Контроллер приближения 
var mapOptions ={
  zoomControl: false, 
  minZoom: 17,
  maxZoom: 17,
}
//Кординаты для карты
var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
});

//Кординаты
var coordinates = [window.x,window.y]; 
//Если кординат нет, выдает ошибку
if (coordinates.includes()) {
  alert("Нет gps");
}
//Карта 
var map = L.map("map", mapOptions).setView(coordinates, 6);
osm.addTo(map);
var marker
marker = L.marker(coordinates, { icon: Icon }).addTo(map);

var i = 0
setInterval(Update,2000);
function Update()
{
  i += 0.001
  var coordinates = [x + i, y + i]; 
  
  map.setView(coordinates, 6);
  map.removeLayer(marker);

  setTimeout(Time,1);
  function Time() 
  {
    map.removeLayer(marker);
    marker = L.marker(coordinates, { icon: Icon }).addTo(map);
  }
  
}

// Текст справа снизу
document.getElementsByClassName(
  "leaflet-control-attribution"
)[0].style.display = "none";