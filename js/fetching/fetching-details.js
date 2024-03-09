export const fetchDetailsData = async function () {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  return await fetch(
    `https://tap-web-1.herokuapp.com/topics/details/${id}`
  ).then((res) => {
    return res.json();
  });
};
