import '/styles/style.css';
import { Dominic } from './dom';
import {charactercards} from './cards';

document.querySelector("#tmeeton").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  }
  else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
});

function cardCreator(charactercards) {
  document.querySelector(".app").insertAdjacentHTML(
    "beforeend",
    `<div class="card">
      <h2 class = "text">${charactercards.name}</h2>
      <img src=${charactercards.imgURL} alt="" class="card-img">
      <h2 class = "text"> ${charactercards.title}</h2>
    </div>`
  );
}

charactercards.forEach((take) => cardCreator(take));

const remove = function () {
  document.querySelectorAll(".card").forEach((card) => card.remove());
};

const mapData = function () {
  charactercards
      .map((serv) => ({
          name: serv.name,
          imgURL: serv.imgURL,
          title: serv.title,
          class: serv.class,
      })
    )
};

function filterAAA(klass) {Dominic[klass].addEventListener("click", function () {
  remove();
  mapData();
  charactercards.filter((serv) => serv.class.includes(klass))
  .forEach((serv) => {
          console.log(serv.name);
          cardCreator(serv);
        });
})};

filterAAA("All");
filterAAA("Saber");
filterAAA("Lancer");
filterAAA("Archer");
filterAAA("Rider");

