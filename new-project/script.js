/* Dark Mode */
function toggleDark() {
  document.body.classList.toggle("dark");
}

/* Counter */
let count = 0;

function increase() {
  count++;
  document.getElementById("count").innerText = count;
}

function decrease() {
  count--;
  document.getElementById("count").innerText = count;
}

/* Image Change */
function changeImg(num) {
  let img = document.getElementById("img");

  if (num === 1) {
    img.src = "img/img1.jpg";
  } else if (num === 2) {
    img.src = "img/img2.jpg";
  }
}
