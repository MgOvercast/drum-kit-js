  // creating arrays for clicked/pressed keys and corresponding sounds
var keys = ["w", "a", "s", "d", "j", "k", "l"];
var sounds = ["snare", "tom-3", "tom-1", "kick-bass", "tom-2", "tom-4", "crash"];
buttons = document.querySelectorAll(".drum");
  // adding mouse click events to buttons associated with drum pieces
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    soundFX(this.innerHTML);
  });
}
  // adding keyboard events to buttons associated with drum pieces
document.addEventListener("keydown", function(event) {
    // converting pressed key to lowercase in case CAPS LOCK is on
  soundFX(event.key.toLowerCase());
});
  // function to create sound and animation
function soundFX(key) {
  if (keys.includes(key)) {
    var index = keys.indexOf(key);
    var piece = document.querySelector("." + key).classList;
       // creating audio file url for playing associated sound
    var sound = "sounds/" + sounds[index] + ".mp3";
    var audio = new Audio(sound);
    audio.play();
      // adding class .pressed to drum piece icon for showing animation
    piece.add("pressed");
      // removing class .pressed after 0.1 seconds
    setTimeout(function(){
      piece.remove("pressed");},100);
  }
}
