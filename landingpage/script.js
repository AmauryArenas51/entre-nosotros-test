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

/* ********* Drag&Drop ********* */

const CLUE = 3;

let draggableElement = document.querySelector(".draggable-elements");
let droppableElement = document.querySelector(".droppable-elements");

let clues = document.querySelectorAll(".draggable-image");
clues = [...clues];
clues.forEach((clues) => {
  clues.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text", event.target.id);
  });
});

let clueNames = document.querySelectorAll(".clue-names");
let wrongMsg = document.querySelector(".wrong");
let points = 0;
clueNames = [...clueNames];
clueNames.forEach((clueNames) => {
  clueNames.addEventListener("dragover", (event) => {
    event.preventDefault();
  });
  clueNames.addEventListener("drop", (event) => {
    const draggableElementData = event.dataTransfer.getData("text");
    let clueElement = document.querySelector(`#${draggableElementData}`);

    if (event.target.innerText == draggableElementData) {
      console.log("si");
      event.target.innerHTML = "";
      points++;
      event.target.appendChild(clueElement);
      wrongMsg.innerText = "";

      if (points == CLUE) {
        draggableElement.innerHTML = `<p class="win">Ganaste</p>`;
      }
    } else {
      console.log("no");
      wrongMsg.innerText = "Ups";
    }
  });
});
