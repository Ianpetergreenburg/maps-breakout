function alterMarker(marker){
  marker.addListener('rightclick', function(){
    marker.setDraggable(true)  })
}
