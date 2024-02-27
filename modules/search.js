const searchResults = async function (input) {
  let results = await fetch(
    `https://tap-web-1.herokuapp.com/topics/list?phrase=${input}`
  ).then((res) => res.json());

  return results;
};
export { searchResults };
