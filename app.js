var image_tracker = true;
const btnStart = document.getElementById("btn-start");
const btnPause = document.getElementById("btn-pause");
let timer;

function change() {
  var image = document.getElementById("x");
  if (image_tracker === true) {
    image.src =
      "https://www.google.fr/logos/2020/kitsune/rc7/CTA-CenteredPlayButtonFrame2.png";
    image_tracker = false;
  } else {
    image.src =
      "https://www.google.fr/logos/2020/kitsune/rc7/CTA-CenteredPlayButtonFrame1.png";
    image_tracker = true;
  }
}

btnStart.addEventListener("click", function () {
  timer = setInterval(change, 1000);
});

btnPause.addEventListener("click", function () {
  clearInterval(timer);
  console.log("salut");
});
