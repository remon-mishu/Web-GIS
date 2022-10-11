// ====ADD Base Map====

var map = L.map("map").setView([23.685, 90.3563], 7);

var baseMap = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
	attribution:
		'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
});
map.addLayer(baseMap);

// ====Add Marker to the Divisions====

var dhakaMarker = L.marker([23.8103, 90.4125]);
var chattogramMarker = L.marker([22.3569, 91.7832]);
var sylhetMarker = L.marker([24.8949, 91.8687]);
var khulnaMarker = L.marker([22.82, 89.550003]);
var rajshahiMarker = L.marker([24.3745, 88.6042]);
var barishalMarker = L.marker([22.701, 90.3535]);
var rangpurMarker = L.marker([25.7439, 89.2752]);
var mymensingMarker = L.marker([24.7471, 90.4203]);

// ====Get ID from HTML file and declare a variable====

var dhaka_local = document.getElementById("dhakaLocal");
var chattogram_local = document.getElementById("chattogramLocal");
var sylhet_local = document.getElementById("sylhetLocal");
var khulna_local = document.getElementById("khulnaLocal");
var rajshahi_local = document.getElementById("rajshahiLocal");
var barishal_local = document.getElementById("barishalLocal");
var rangpur_local = document.getElementById("rangpurLocal");
var mymensing_local = document.getElementById("mymensingLocal");

// ====Apply OnClick function to the declared variable====

dhaka_local.onclick = function () {
	map.addLayer(dhakaMarker);
	map.setView([23.8103, 90.4125], 13);
};
chattogram_local.onclick = function () {
	map.addLayer(chattogramMarker);
	map.setView([22.3569, 91.7832], 13);
};
sylhet_local.onclick = function () {
	map.addLayer(sylhetMarker);
	map.setView([24.8949, 91.8687], 13);
};
khulna_local.onclick = function () {
	map.addLayer(khulnaMarker);
	map.setView([22.82, 89.550003], 13);
};
rajshahi_local.onclick = function () {
	map.addLayer(rajshahiMarker);
	map.setView([24.3745, 88.6042], 13);
};
barishal_local.onclick = function () {
	map.addLayer(barishalMarker);
	map.setView([22.701, 90.3535], 13);
};
rangpur_local.onclick = function () {
	map.addLayer(rangpurMarker);
	map.setView([25.7439, 89.2752], 13);
};
mymensing_local.onclick = function () {
	map.addLayer(mymensingMarker);
	map.setView([24.7471, 90.4203], 13);
};
