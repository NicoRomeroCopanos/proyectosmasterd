//JS para el mapa interactvo con OpenStreetmap

let options={
    enableHighAccurracy: true,
    timeout: 5000,
    maximunAge: 0
}

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
        success, 
        error, 
        options
    );

}else{
    alert("Los servicios de geolocalización no están disponibles");
}


function success(position){
    let latitude = position.coords.latitude; 
    let longitude = position.coords.longitude;
    
    let map = L.map('map',{
        center:[latitude, longitude],
        zoom: 14
    })

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'MYD'}).addTo(map)
    
    let control = L.Routing.control({
      waypoints:[
        L.latLng(latitude, longitude),
        L.latLng(39.572021, 2.687630)
      ],
      language: 'es',

    }).addTo(map);
}



function error(){

}

/*let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};
 
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, error, options);
}
 
function success(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
 
  let map = L.map("map");
 
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
  }).addTo(map);
 
  L.Routing.control({
    waypoints: [
      L.latLng(latitude, longitude),
      L.latLng(37.17059, -3.60552)],
    routeWhileDragging: true,
  }).addTo(map);
}
 
function error() {
  alert("Unable to retrieve your location");
}*/





