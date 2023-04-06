(function() {
  setTimeout(() => {
    animateEventRow()

    setInterval(() => {
      animateEventRow()
    }, 15000);
  }, 5000);

  function animateEventRow() {
    const imgExpandable = document.querySelector('#imgExpandable');
    imgExpandable.classList.add('pressed');
    setTimeout(() => {
      imgExpandable.classList.add('expanded');
      imgExpandable.classList.remove('pressed');
      setTimeout(() => {
        imgExpandable.classList.remove('expanded');
      }, 10000);
    }, 500);
  }
})();