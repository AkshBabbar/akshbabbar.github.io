function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(45.382740, -75.695900),
        zoom: 5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}