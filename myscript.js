// Play/pause the video when hovering over the text
var hoverText = document.getElementById("hover-text");
var hoverVideo = document.getElementById("hover-video");

hoverText.addEventListener("mouseover", function() {
  hoverVideo.play();
});

hoverText.addEventListener("mouseout", function() {
  hoverVideo.pause();
});


