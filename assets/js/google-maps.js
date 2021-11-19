function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 26.4499287, lng: 80.1906822,};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Lucknow, INDIA'  // Title Location
    });
}
