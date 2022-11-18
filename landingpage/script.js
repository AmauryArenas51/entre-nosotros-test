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

const activeClue1 = document.querySelector(".active-clue-1");

const activeClue2 = document.querySelector(".active-clue-2");

let revelation = document.querySelector(".resolution");

let score = 0;

/* const mainImage1 = document.querySelector(".main-clue-image-2");
const clue1 = document.querySelectorAll(".clue1"); */
/* const clue1 = document.querySelector("#"); */

/* thumbnail1.forEach((thumb) => {
  thumb.addEventListener("click", function () {
    const active = document.querySelector(".active-clue-1");
    active.classList.remove("active-clue-1");
    this.classList.add("active-clue-1");
    mainImage1.src = this.src;
    let trueClue = document.getElementsByClassName("active-clue-1")[0].id;
    if (trueClue == 2) {
      revelation.innerHTML = "<p>Funciona</p>";
      score++;
    } else {
      revelation.innerHTML = "";
      score = 0;
    }
  });
});

thumbnail2.forEach((thumb) => {
  thumb.addEventListener("click", function () {
    const active = document.querySelector(".active-clue-2");
    active.classList.remove("active-clue-2");
    this.classList.add("active-clue-2");
    mainImage2.src = this.src;
  });
});

if (score == 1) {
  revelation.innerHTML = "<p>Funciona</p>";
} else {
  revelation.innerHTML = "";
}

console.log(score); */

thumbnail1.forEach((thumb) => {
  thumb.addEventListener("click", function () {
    const active = document.querySelector(".active-clue-1");
    active.classList.remove("active-clue-1");
    this.classList.add("active-clue-1");
    mainImage1.src = this.src;
    let trueClue = document.getElementsByClassName("active-clue-1")[0].id;
    if (trueClue == 2) {
      /* revelation.innerHTML = "<p>Funciona</p>"; */
      score++;
    } else {
      /* revelation.innerHTML = ""; */
      score = 0;
    }
    if (score == 2) {
      revelation.innerHTML = "<p>Funciona</p>";
    } else {
      revelation.innerHTML = "";
    }
  });
});

thumbnail2.forEach((thumb) => {
  thumb.addEventListener("click", function () {
    const active = document.querySelector(".active-clue-2");
    active.classList.remove("active-clue-2");
    this.classList.add("active-clue-2");
    mainImage2.src = this.src;
    let trueClue = document.getElementsByClassName("active-clue-1")[0].id;
    if (trueClue == 2) {
      /* revelation.innerHTML = "<p>Funciona</p>"; */
      score++;
    } else {
      /* revelation.innerHTML = ""; */
      score = 0;
    }
    if (score == 2) {
      revelation.innerHTML = "<p>Funciona</p>";
    } else {
      revelation.innerHTML = "";
    }
  });
});

/* function imageSelector(thumbnail, activeClue, number, mainImage) {
  thumbnail.forEach((thumb) => {
    thumb.addEventListener("click", function () {
      const active = activeClue;
      active.classList.remove("active-clue-1");
      this.classList.add("active-clue-1");
      mainImage.src = this.src;
    });
  });
}

imageSelector(thumbnail1, activeClue1, 1, mainImage1);
imageSelector(thumbnail2, activeClue2, 2, mainImage2); */

/* clue1.forEach((clue) => {
  clue.addEventListener("click", function () {
    const active = document.querySelector(".active-clue");
    active.classList.remove("active-clue");
    this.classList.add("active-clue");
    mainImage1.src = this.src;
  });
}); */
