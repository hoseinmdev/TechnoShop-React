const backToUp = () => {
  // must not return scrollTo's result: newer Chromium returns a Promise,
  // and callers pass backToUp directly to useEffect, where a returned
  // non-function crashes React when invoked as cleanup
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
export default backToUp;
