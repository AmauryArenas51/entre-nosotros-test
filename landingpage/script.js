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

/* class Clues {
  constructor() {
    this.canPlay = false;
  }
}
const mainImage1 = document.querySelector(".main-clue-image-1");
const thumbnail1 = document.querySelectorAll(".clue-image-1");

const mainImage2 = document.querySelector(".main-clue-image-2");
const thumbnail2 = document.querySelectorAll(".clue-image-2");

const mainImage3 = document.querySelector(".main-clue-image-3");
const thumbnail3 = document.querySelectorAll(".clue-image-3");

const mainImage4 = document.querySelector(".main-clue-image-4");
const thumbnail4 = document.querySelectorAll(".clue-image-4");

const activeClue1 = document.querySelector(".active-clue-1");

const activeClue2 = document.querySelector(".active-clue-2");

const activeClue3 = document.querySelector(".active-clue-3");

const activeClue4 = document.querySelector(".active-clue-4");

let revelation = document.querySelector(".resolution");

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
  new Clues();
}); */

/* function verificarRespuestas() {
  let total = 1;
  let puntos = 0;

  let myForm = document.forms["quizForm"];
  let respuestas = ["c", "c"];

  for (let i = 0; i <= total; i++) {
    if (myForm["p" + i].value === null || myForm["p" + i].value === "") {
      alert("Por favor responde la pregunta " + i);
      return false;
    } else {
      if (myForm["p" + i].value === respuestas[i - 1]) {
        puntos++;
      }
    }
  }

  let resultado = document.getElementById("resultado");
  resultado.innerHTML =
    `<h3>Obtuviste <span>` +
    puntos +
    `</span> de <span>'</span>` +
    total +
    ` puntos</h3>`;

  return false;
}

function reset(); */

function check() {
  let question1 = document.quiz.p1.value;
  /*   let question2 = document.quiz.p2.value;
  let question3 = document.quiz.p3.value; */

  let correct = 0;

  if (question1 == "a") {
    correct++;
  }
  /*   if (question2 == "b") {
    correct++;
  }
  if (question3 == "c") {
    correct++;
  } */

  document.getElementById("after-submit").style.visibility = "visible";
  document.getElementById("number-correct").innerHTML =
    "Tienes " + correct + " opciones correctas";

  console.log(correct);
}

function myFunction() {
  location.reload();
}
