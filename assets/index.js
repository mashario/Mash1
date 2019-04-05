$(function() {
  var timer = null;
  var input = document.getElementById('Meditative Breathing');

  function tick() {
      ++input.value;
      start(0);        // restart the timer
  };

  function start() {  // use a one-off timer
      timer = setTimeout(tick, 1500);
  };

  function stop() {
      clearTimeout(timer);
  };

  $('#start').bind("click", start); // use .on in jQuery 1.7+


  // if you want it to auto-start
});

var button = document.createElement("button");
button.appendChild(document.createTextNode('Add to Home Screen?'));
document.body.appendChild(button);

var deferredPrompt = null;

button.addEventListener('click', function(start) {
  if (deferredPrompt === null) {
    return true;
  }
  button.style.setProperty('bottom', '-2.5em');
  deferredPrompt.prompt();
});

window.addEventListener('beforeinstallprompt', function(e) {
  e.preventDefault();
  deferredPrompt = e;
  button.style.setProperty('bottom', '0');
});

if (Object.prototype.hasOwnProperty.call(window.navigator, 'serviceWorker')) {
  window.addEventListener('load', function() {
    window.navigator.serviceWorker.register('assets/service-worker.js');
  });
}
