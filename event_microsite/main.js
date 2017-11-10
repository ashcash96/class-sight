$(function()
{
  var video = $('body > video')[0],
	  cvs = document.createElement('canvas'),
	  ctx = cvs.getContext('2d');
  
  navigator.getMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
  
  navigator.getMedia({ video: !0, audio: !1 }, function(stream)
  {
    if(navigator.mozGetUserMedia)
      video.mozSrcObject = stream;
    else
    {
      var vu = window.URL || window.webkitURL;
      video.src = vu.createObjectURL(stream);
    }
    video.play();
  }, function(error)
  {
    if(window.console)
      console.error(error);
  });
  
  video.addEventListener('canplay', function(ev)
  {
    if(!streaming)
    {
      height = video.videoHeight / (video.videoWidth / width);
      video.setAttribute('width', width);
      video.setAttribute('height', height);
      streaming = !0;
    }
  }, !1);
});
