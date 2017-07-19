function loadMarkersList(locations){
  return locations.map(function(location, i){
    //locations need to be in {lat: ###, lng: ###} format
    var marker = new google.maps.Marker({
          position: location,
          map: map,
          // label: i.toString()
        })

    // alterMarker(marker)
    // deleteMarker(marker)

    return marker
  })
}
