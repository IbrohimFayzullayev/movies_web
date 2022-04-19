class ViewResult {
  #userInput = document.querySelector(".user_search");
  #parentDiv = document.querySelector(".movie-list");
  #form = document.querySelector(".user__form");

  #clearHtml() {
    this.#parentDiv.innerHTML = "";
  }
  getValue() {
    return this.#userInput.value;
  }
  addHandlerEvent(handle) {
    this.#form.addEventListener("submit", function (e) {
      e.preventDefault();
      handle();
    });
  }
  resultView(obj) {
    this.#clearHtml();
    for (let val of obj) {
      let html = `<div class="movie-list-item">
        <img class="movie-list-item-img" src="${val.poster}" alt="" />
        <span class="movie-list-item-title">${val.title}</span>
        <p class="movie-list-item-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At
          hic fugit similique accusantium.
        </p>
        <button class="movie-list-item-button">Watch</button>
      </div>`;
      this.#parentDiv.insertAdjacentHTML("afterbegin", html);
    }
  }
}
export default new ViewResult();
