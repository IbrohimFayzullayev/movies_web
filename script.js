const userInput = document.querySelector(".user_search");
const searchBtn = document.querySelector(".search_btn");
const parentDiv = document.querySelector(".movie-list");

let getJson = async function (url) {
  let dataJson = await fetch(url);
  let data = await dataJson.json();
  return data;
};
let getValue = async function () {
  let inputValue = userInput.value;
  let a = await getJson(
    `https://www.omdbapi.com/?apikey=1fd18c03&s=${inputValue}`
  );
  resultView(a.Search);
};
// userInput.addEventListener("submit", async function () {
//   getValue();
// });
searchBtn.addEventListener("click", async function () {
  getValue();
});
let resultView = function (obj) {
  parentDiv.innerHTML = "";
  for (let val of obj) {
    let html = `<div class="movie-list-item">
    <img class="movie-list-item-img" src="${val.Poster}" alt="" />
    <span class="movie-list-item-title">${val.Title}</span>
    <p class="movie-list-item-desc">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. At
      hic fugit similique accusantium.
    </p>
    <button class="movie-list-item-button">Watch</button>
  </div>`;
    parentDiv.insertAdjacentHTML("afterbegin", html);
  }
};
