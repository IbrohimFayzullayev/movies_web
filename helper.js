export let getJson = async function (url) {
  let dataJson = await fetch(url);
  let data = await dataJson.json();
  return data;
};
