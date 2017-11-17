/*
var	currentLocation = 'one';
$(document).scroll(function(e){
	var scrolled = $(window).scrollTop(),
		secondHeight = $('#two').offset().top,
		thirdHeight = $('#three').offset().top;
	if (scrolled > 1 && currentLocation == 'one') {
		currentLocation = 'two';
		$('body').animate({scrollTop:$('#two').offset().top}, 500);
	} else if (scrolled > secondHeight + 1 && currentLocation == 'two') {
		currentLocation = 'three';
		$('body').animate({scrollTop:$('#three').offset().top}, 500);
	} else if (scrolled < thirdHeight - 1 && currentLocation == 'three') {
		currentLocation = 'two'
		$('body').animate({scrollTop:$('#two').offset().top}, 500);
	} else if (scrolled < secondHeight - 1 && currentLocation == 'two') {
		currentLocation = 'one';
		$('body').animate({scrollTop:$('#one').offset().top}, 500);
	}
	$('h1').html(scrolled);
	$('h1').append("/" + secondHeight);
	$('h1').append("/" + thirdHeight);
})

}
} function setKeyboardScrolling(value, directions){
            if(typeof directions !== 'undefined'){
                directions = directions.replace(/ /g,'').split(',');

                $.each(directions, function (index, direction){
                    setIsScrollAllowed(value, direction, 'k');
                });
            }else{
                setIsScrollAllowed(value, 'all', 'k');
                options.keyboardScrolling = value;
            }
        }

*/
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

