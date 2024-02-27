const cardData = async function () {
  const jsonCardData = await fetch(
    "https://tap-web-1.herokuapp.com/topics/list"
  ).then((res) => {
    return res.json();
  });
  return jsonCardData;
};
export { cardData };
