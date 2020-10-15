//Criando mapa
const map = L.map('mapid').setView([-29.8418863,-51.1363815], 15);

//criando e adicionando tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//Create Icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

//criando popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight:240
}).setContent('Casa-Lar Abrigo Meu Refúgio<a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"></a>')

//Criando e adicionando marcador
L.marker([-29.8418863,-51.1363815], { icon : icon }).addTo(map)
    .bindPopup(popup)