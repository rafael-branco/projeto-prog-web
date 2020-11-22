var mapa;

function initMap() {

  var configuracoes = {
    center: {lat: -25.44080045902894, lng: -49.27740278901922},
    zoom: 15
  }
      
  mapa = new google.maps.Map(document.getElementById('map'), configuracoes);

  var marcador = new google.maps.Marker({
    position: {lat: -25.44080045902894, lng: -49.27740278901922},
    title: "Xandão Suplementos",
    map: mapa
  });
}