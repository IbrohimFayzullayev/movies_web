import * as model from "./model.js";
import view from "./view.js";

const showResult = async function () {
  try {
    let inputValue = view.getValue();

    await model.loadMovie(inputValue);

    view.resultView(model.state.movies);
  } catch (err) {
    throw err;
  }
};

view.addHandlerEvent(showResult);
