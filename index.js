const key ="3c8e55759df24a6d984332356db36b4c";

const timezone = document.querySelectorAll(".time-zone .details p span");


var requestOptions = {
    method: 'GET',
  };
function fetchLocation(lat,lon){
    fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=3c8e55759df24a6d984332356db36b4c`, requestOptions)
  .then(response => response.json())
  .then(result => renderItems(result.features[0]))
  .catch(error => console.log('error', error));
}


function renderItems(result){
   
    timezone[0].textContent = " "+result.properties.timezone.name;
    timezone[1].textContent = " "+(result.properties.lat).toString();
    timezone[2].textContent =  " "+(result.properties.lon).toString();
    timezone[3].textContent =  " "+result.properties.timezone.offset_STD;
    timezone[4].textContent =  " "+result.properties.timezone.offset_STD_seconds;
    timezone[5].textContent =  " "+result.properties.timezone.offset_DST;
    timezone[6].textContent =  " "+result.properties.timezone.offset_STD_seconds;
    timezone[7].textContent = " "+ result.properties.country;
    timezone[8].textContent =  " "+result.properties.postcode;
    timezone[9].textContent =  " "+result.properties.city;
}

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }


  function showPosition(position) {
    fetchLocation( position.coords.latitude , position.coords.longitude);
  }

  getLocation();