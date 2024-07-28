
  var audio = document.createElement("AUDIO")
document.body.appendChild(audio);
audio.src = "/funnyhaha/rikroll.mp3"

document.body.addEventListener("mousemove", function () {
    audio.play()
})
