const fetchCards = async function (input = "") {
  try {
    return await fetch(
      `https://tap-web-1.herokuapp.com/topics/list?phrase=${input}`
    ).then((res) => {
      return res.json();
    });
  } catch (e) {
    return `Something went wrong. Web topics failed to load`;
  }
};
export { fetchCards };
