function alterarStatus(id) {
    const game = document.getElementById(`game-${id}`);
    const container = game.querySelector("div");
    const button = game.querySelector("a");

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