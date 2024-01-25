var scrollArea = document.getElementById('space');
var scrollIndicator = document.getElementById('indicator');
var scrollHeight = 0;
var scrollOffset = 0;
var scrollPercent = 0;

resize();

function loop() {
  scrollOffset = window.pageYOffset || window.scrollTop;
  scrollPercent = scrollOffset/scrollHeight || 0;
  var transformString = 'translateY('+(scrollPercent*172)+'px)';
  indicator.style.mozTransform = transformString;
  indicator.style.webkitTransform = transformString;
  indicator.style.transform = transformString;
  
  requestAnimationFrame(loop);
}

loop();

function resize() {
  scrollHeight = window.innerHeight*3;
  scrollArea.style.height = (window.innerHeight*0)+'px';
}

window.addEventListener('resize', resize);