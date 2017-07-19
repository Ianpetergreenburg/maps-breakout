function addMarker() {
  map.addListener('click', function(e) {
    lat = e.latLng.lat();
    lng = e.latLng.lng();
    console.log({lat: lat, lng: lng})
    new google.maps.Marker({
      position: {lat: lat, lng: lng},
      map: map
    })
  });
}
