/* ********* Menu ********* */

((d) => {
  const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;

    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  });
})(document);

/* ********* Details Clues ********* */

const mainImage1 = document.querySelector(".main-clue-image-1");
const thumbnail1 = document.querySelectorAll(".clue-image-1");

const mainImage2 = document.querySelector(".main-clue-image-2");
const thumbnail2 = document.querySelectorAll(".clue-image-2");

const mainImage3 = document.querySelector(".main-clue-image-3");
const thumbnail3 = document.querySelectorAll(".clue-image-3");

const mainImage4 = document.querySelector(".main-clue-image-4");
const thumbnail4 = document.querySelectorAll(".clue-image-4");

document.addEventListener("DOMContentLoaded", () => {
  function selectClue() {
    const active = document.querySelector(".active-clue-1");
    active.classList.remove("active-clue-1");
    this.classList.add("active-clue-1");
    mainImage1.src = this.src;
  }

  const clues = thumbnail1;
  clues.forEach((clue) => {
    clue.addEventListener("click", selectClue);
  });

  function selectClue2() {
    const active2 = document.querySelector(".active-clue-2");
    active2.classList.remove("active-clue-2");
    this.classList.add("active-clue-2");
    mainImage2.src = this.src;
  }

  const clues2 = thumbnail2;
  clues2.forEach((clue2) => {
    clue2.addEventListener("click", selectClue2);
  });

  function selectClue3() {
    const active3 = document.querySelector(".active-clue-3");
    active3.classList.remove("active-clue-3");
    this.classList.add("active-clue-3");
    mainImage3.src = this.src;
  }

  const clues3 = thumbnail3;
  clues3.forEach((clue3) => {
    clue3.addEventListener("click", selectClue3);
  });

  function selectClue4() {
    const active4 = document.querySelector(".active-clue-4");
    active4.classList.remove("active-clue-4");
    this.classList.add("active-clue-4");
    mainImage4.src = this.src;
  }

  const clues4 = thumbnail4;
  clues4.forEach((clue4) => {
    clue4.addEventListener("click", selectClue4);
  });
});

function check() {
  let question1 = document.quiz.p1.value;
  let question2 = document.quiz.p2.value;
  let question3 = document.quiz.p3.value;
  let question4 = document.quiz.p4.value;

  let correct = 0;
  let allCorrect = 4;

  if (question1 == "a") {
    correct++;
  }
  if (question2 == "b") {
    correct++;
  }
  if (question3 == "c") {
    correct++;
  }
  if (question4 == "d") {
    correct++;
  }
  if (correct == allCorrect) {
  }

  document.getElementById("after-submit").style.visibility = "visible";
  document.getElementById("number-correct").innerHTML =
    "Tienes " + correct + " opciones correctas";

  console.log(correct);
}

function myFunction() {
  location.reload();
}
