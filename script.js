// Assuming #map is the ID of your map container
const map = L.map('map').setView([51.505, -0.09], 13); // Example coordinates

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 18,
	zoomControl: false,

	
}).addTo(map);
console.log("data");
function test(vardatabase){
	console.log(vardatabase)

map.flyTo([vardatabase.location.lat, vardatabase.location.lng], 15);
L.marker([vardatabase.location.lat, vardatabase.location.lng]).addTo(map);
}

// class Map(tilesMapProvider) {
// 	this.map = L.map('mapid', {
// 		zoomControl: false
// 	});
// }
// 	this.icon = L.icon({
// 		iconUrl: "../images/icon-location.svg",
// 		iconSize: [25, 25],
// 	})
// 	L.tileLayer(tilesMapProvider || 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' , {
// 		maxZoom: 18,
// 	}).addTo(this.map);

// 	Map.prototype.getLocationInMap = async function(ip) {
//     try {
//         const response = await fetch(`https://geo.ipify.org/api/v1?apiKey=at_g9obwMDynKCF2q3vNXbDikaLoatQ5&ipAddress=${ip}`);
//         const geoData = await response.json();
//         return geoData;
//     } catch (error) {
//         console.error('Error fetching geo data:', error);
//         return null;
//     }
// };

// Map.prototype.addMarker = function(coords, geoData) {
//     this.marker = L.marker(coords, { icon: this.icon }).addTo(this.map);
//     this.marker.bindPopup(`<span>${geoData.ip}</span>`).openPopup();
// };
