let velocity = {
  initial: new Vector3(),
  previous: new Vector3(),
  current: new Vector3()
};
let acceleration = {
  initial: new Vector3(),
  previous: new Vector3(),
  current: new Vector3()
};
let time = {
  previous: 0,
  elapsed: 0,
  delta: 0
};
let distance = {
  previous: 0,
  current: 0
}
var distanceDisplay = document.getElementById('distanceDisplay');
var accelerationDisplay = document.getElementById('accelerationDisplay');
var velocityDisplay = document.getElementById('velocityDisplay');

var started = false;
var accSensor = new window.LinearAccelerationSensor({frequency: 60});


accSensor.onreading = function() {
  time.elapsed = accSensor.timestamp / 1000;
  time.delta = time.elapsed - time.previous;
  time.previous = time.elapsed;
  acceleration.current = new Vector3(accSensor.x, accSensor.y, accSensor.z);
  calculateVelocity();
  calculateDistance();
  showMagnitudes();
};
function toggle() {
  if (started) {
    accSensor.stop();
    started = false;
    document.getElementById('toggleButton').innerHTML = 'Start';
  } else {
    accSensor.start();
    started = true;
    document.getElementById('toggleButton').innerHTML = 'Stop';
    
  }
  
}
function showMagnitudes() {
  accelerationDisplay.innerHTML = acceleration.current.absoluteMagnitude.toFixed(2);
  velocityDisplay.innerHTML = velocity.current.absoluteMagnitude.toFixed(2);
  distanceDisplay.innerHTML = distance.current.toFixed(2);
}
function calculateVelocity() {
  // First Law of Motion
  Object.assign(velocity.current, Vector3.add(velocity.previous, Vector3.scale(acceleration.current, time.delta)));
  
  Object.assign(velocity.previous, velocity.current);
}
function calculateDistance() {
  distance.current = distance.previous + Vector3.scale(velocity.current, time.delta).absoluteMagnitude;
  distance.previous = distance.current;
}