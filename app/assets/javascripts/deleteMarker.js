// https://developers.google.com/maps/documentation/javascript/examples/event-simple
function deleteMarker(marker){
  marker.addListener('dblclick', function(){
    marker.setMap(null)
  })
}
