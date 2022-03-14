function onGeoOk(position){
}

function onGeoErr(){
    alert("no weather for you!");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);