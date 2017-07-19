var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
  // addMarker();
  var markers = loadMarkersList(locations);
  var markerCluster = new MarkerClusterer(map, markers,
         {imagePath: 'https://localhost:3000/images/m'});

}

var locations = [
                {lat: -32.97180377635758, lng: 149.9468994140625},
                {lat: -32.930318199070534, lng: 150.721435546875},
                {lat: -33.05471648804274, lng: 149.952392578125},
                {lat: -32.97641208290518, lng: 150.7269287109375},
                {lat: -33.35806161277886, lng: 149.83154296875},
                {lat: -33.44519313450844, lng: 149.9249267578125},
                {lat: -33.468107955278946, lng: 149.9853515625},
                {lat: -33.48643545099988, lng: 150.205078125},
                {lat: -33.47269019266663, lng: 150.0897216796875},
                {lat: -33.468107955278946, lng: 150.31494140625},
                {lat: -33.45894275368763, lng: 150.4522705078125},
                {lat: -33.44519313450844, lng: 150.556640625},
                {lat: -33.43144133557529, lng: 150.633544921875},
                {lat: -33.35347332342166, lng: 150.7379150390625}
              ]
