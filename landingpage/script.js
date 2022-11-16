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

const mainImage = document.querySelector(".main-clue-image");
const thumbnail = document.querySelectorAll(".clue-image");

const mainImage2 = document.querySelector(".main-clue-image-2");
const thumbnail2 = document.querySelectorAll(".clue-image-2");

/* const mainImage1 = document.querySelector(".main-clue-image-2");
const clue1 = document.querySelectorAll(".clue1"); */
/* const clue1 = document.querySelector("#"); */

thumbnail.forEach((thumb) => {
  thumb.addEventListener("click", function () {
    const active = document.querySelector(".active-clue-1");
    active.classList.remove("active-clue-1");
    this.classList.add("active-clue-1");
    mainImage.src = this.src;
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

/* clue1.forEach((clue) => {
  clue.addEventListener("click", function () {
    const active = document.querySelector(".active-clue");
    active.classList.remove("active-clue");
    this.classList.add("active-clue");
    mainImage1.src = this.src;
  });
}); */
