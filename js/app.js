const game1 = document.getElementById("game-1");
const game2 = document.getElementById("game-2");
const game3 = document.getElementById("game-3");

function alterarStatus(game) {
    let container;
    let button;

    switch(game) {
        case 1:
            container = game1.querySelector("div");
            button = game1.querySelector("a");
        break;

        case 2: 
            container = game2.querySelector("div");
            button = game2.querySelector("a");
        break;

        case 3:
            container = game3.querySelector("div");
            button = game3.querySelector("a");
        break;
    }

    if (container.classList.contains("dashboard__item__img--rented")) {
        container.classList.remove("dashboard__item__img--rented");
        button.classList.remove("dashboard__item__button--return");
        button.innerHTML = "Alugar";
    } else {
        container.classList.add("dashboard__item__img--rented");
        button.classList.add("dashboard__item__button--return");
        button.innerHTML = "Devolver";
    }
}