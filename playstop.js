var video = document.getElementById("voVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

//close and play button for modal

var videoPlayer = document.getElementById("videoPlayer");
          var myVideo = document.getElementById("myVideo");
          
          function stopVideo(){
            videoPlayer.style.display = "none";
          }

          function pauseVideo(){
            myVideo.onclick = "pause";
           myVideo.pause();
          }
          
          function playVideo(file){
          myVideo.src = file;
          videoPlayer.style.display = "block";
          }

          //play button for commercial video on index page

          var video = document.getElementById("voVideo");
          var btn = document.getElementById("voBtn");
  
          function myFunction() {
           if (video.paused) {
             video.play();
             btn.innerHTML = "Pause";
           } else {
             video.pause();
             btn.innerHTML = "Play";
           }
         }