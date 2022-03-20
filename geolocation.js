var GLIsAvailable = false;
if ('geolocation' in navigator) {
  GLIsAvailable = true;
  console.log(navigator.permissions);
 
  var watchID = navigator.geolocation.watchPosition(calculateQuantities, (error) => {
    if (error.code == 1) {
      alert("Location access denied.\n Please consider turning on Location or allow Location Access to use the app.");
    } else {
      alert("An error occurred. Please try again after some time.");
    }
  });
}
function calculateQuantities(position) {
  console.log(position.coords.speed);
}
