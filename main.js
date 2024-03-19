
// UPDATE THIS WITH A BETTER STARTING LATITUDE AND LONGITUDE AND ZOOM LEVEL
const map = L.map('map').setView([51.505, -0.09], 13);


// REPLACE THIS BLOCK OF CODE WITH YOUR MAPBOX CODE
const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; OpenStreetMap &amp; MapBox'
}).addTo(map);
// END REPLACE BLOCK

// This creates a marker on your map at the specified latitude and longitude.  
// There is also a pop-up
const marker = L.marker([51.5, -0.09]).addTo(map)
	.bindPopup('<b>Hello world!</b><br />I am a popup.').openPopup();


// This creates a polygon on your map with the provided coordinates
const polygon = L.polygon([
		[51.509, -0.08],
		[51.503, -0.06],
		[51.51, -0.047]
	],{
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.5,
		radius: 500
	}).addTo(map).bindPopup('I am a polygon.');
