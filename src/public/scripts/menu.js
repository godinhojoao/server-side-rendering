(function () {
  const allLinkElements = document.querySelectorAll('.menu__list a');

  for (let link of allLinkElements) {
    if (link.href == location.href) {
      link.firstElementChild.classList.add('active');
    }
  }
})();