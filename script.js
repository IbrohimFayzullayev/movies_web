userInput = document.querySelector(".user_search");
searchBtn = document.querySelector(".search_btn");

fetch("https://www.omdbapi.com/?apikey=1fd18c03&s=shazam")
  .then((response) => response.json())
  .then((res) => console.log(res));
