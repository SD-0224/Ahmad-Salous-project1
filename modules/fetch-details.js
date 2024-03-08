const GET_DETAILS_DATA = async function () {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const DETAILS_DATA = await fetch(
    `https://tap-web-1.herokuapp.com/topics/details/${id}`
  ).then((res) => res.json());
  return DETAILS_DATA;
};
export { GET_DETAILS_DATA };
