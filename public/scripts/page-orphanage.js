const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//Criando mapa
const map = L.map('mapid', options).setView([-29.8418863,-51.1363815], 15);

//criando e adicionando tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//Create Icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

//Criando e adicionando marcador
L.marker([-29.8418863,-51.1363815], { icon : icon }).addTo(map)

/* galeria de imagens */

function selectImage(event) {
    const button = event.currentTarget;

    //Remover todas as classes active
    const buttons = document.querySelectorAll('.images button');
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button){
        button.classList.remove('active');
    }

    //selecionar a imagem clicada
    const image = button.children[0];
    const imagecontainer = document.querySelector('.orphanage-details > img');

    //atualizar o container de imagem
    imagecontainer.src = image.src;
    //adicionar a classe .active para este botão
    button.classList.add('active');

}