//Criando mapa
const map = L.map('mapid').setView([-29.8418863,-51.1363815], 15);

//criando e adicionando tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//Create Icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
})

let marker;

//create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat; //seleciona o objeto input pela name e adiciona a lat no value
    document.querySelector('[name=lng]').value = lng; //seleciona o objeto input pela name e adiciona a lng no value

    //remover icon
    marker && map.removeLayer(marker);

    //add icon layer
    marker = L.marker([lat, lng], {icon}).addTo(map)
})

// adicionar o campo de fotos
function addPhotoField() {
    //pegar container de fotos #images
    const container = document.querySelector('#images')
    //pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar o clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);
    //verificar se o campo está vazio, se sim, não adicionar ao container de imagens
    const input = newFieldContainer.children[0]
    if(input.value == ""){
        return;
    }
    
    //limpar campo antes de adicionar ao container de imagens
    input.value = "";
    //adicionar o clone ao container de #images
    container.appendChild(newFieldContainer);

}

function deleteField(event){
    const span = event.currentTarget;
    const fieldsContainer = document.querySelectorAll('.new-upload');
    if(fieldsContainer.length <= 1) {
        //limpar o valor do campo
        span.parentNode.children[0].value = "";
        return;
    }

    //deletar o campo
    span.parentNode.remove();
}

//selecionar sim ou não
function toggleSelect(event) {
    //retirar a class .active (dos botoes)
    document.querySelectorAll('.button-select button').forEach((button) => button.classList.remove('active'));
    
    //colocar a classe .active no botão clicado
    const button = event.currentTarget
    button.classList.add('active');

    //atualizar o input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value;
}