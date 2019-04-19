function initMap() {
    var options = {
        zoom: 13,
        center: {
            lat: 47.151726,
            lng: 27.587914
        }
    }
    var map = new google.maps.Map(document.getElementById('map'), options);
    var contentString = '<h3 style=" color: black " >Service Auto</h3>';
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    var marker = new google.maps.Marker({
        position: {
            lat: 47.151726,
            lng: 27.587920
        },
        map: map
    });
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
}