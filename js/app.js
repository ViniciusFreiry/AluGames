function alterarStatus(id) {
    const game = document.getElementById(`game-${id}`);
    const container = game.querySelector(".dashboard__item__img");
    const button = game.querySelector(".dashboard__item__button");

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