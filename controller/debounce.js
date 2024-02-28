let debounce = function (func, delay) {
  let timeoutId;
  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func();
    }, delay);
  };
};
