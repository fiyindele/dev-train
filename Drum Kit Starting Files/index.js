var numOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    charactercheck(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
}

//var audio = new Audio("sounds/tom-1.mp3");
//    audio.play();

// function HouseKeeper(age, name, cleaningRepertoire) {
//   this.name = name;
//   this.age = age;
//   this.cleanignRepertoire = cleaningRepertoire;
//   this.clean = function () {
//     alert("Cleaning in progress!");
//   };
// }

// var houseKeeper1 = new HouseKeeper(37, "Anita", ["kitchen", "bathroom"]);

document.addEventListener("keydown", function (event) {
  charactercheck(event.key);

  buttonAnimation(event.key);
});

function charactercheck(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default:
      console.log(buttonInnerHTML);
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
