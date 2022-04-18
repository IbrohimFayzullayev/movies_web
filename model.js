import { API_URL } from "./config.js";
import { getJson } from "./helper.js";
export const state = {
  movies: {},
};
export const loadMovie = async function (value) {
  try {
    const data = await getJson(`${API_URL}${value}`);
    let obj = data.Search;
    state.movies = obj.map((val) => {
      return {
        poster: val.Poster,
        year: val.Year,
        title: val.Title,
      };
    });
  } catch (err) {
    throw err;
  }
};
