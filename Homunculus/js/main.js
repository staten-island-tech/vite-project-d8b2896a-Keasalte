import '/styles/style.css';
import { Dominic } from './dom';
import {charactercards} from './cards';

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

charactercards.forEach((take) => cardCreator(take.name, take.title, take.imgURL));

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
const filters = {
  All: function () {
      Dominic.filterAll.addEventListener("click", function () {
          remove();
          mapData();
          charactercards
              .forEach((serv) => {
                  console.log(serv.name);
                  cardCreator(serv);
              });
      });
  },
  Sabers: function () {
    Dominic.filterSaber.addEventListener("click", function () {
      remove();
      mapData();
        charactercards
            .filter((serv) => serv.class.includes("Saber"))
            .forEach((serv) => {
              console.log(serv.name);
              cardCreator(serv);
            });
    });
  },
};

filters.All();
filters.Sabers();