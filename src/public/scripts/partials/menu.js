(function () {
  const allLinkElements = document.querySelectorAll('.menu__list a');
  const splittedPathname = window.location.pathname.split('/');
  const currentUserId = splittedPathname[splittedPathname.length - 1];

  for (let link of allLinkElements) {
    link.href += `/${currentUserId}`;

    if (link.href == location.href) {
      link.firstElementChild.classList.add('active');
    }
  }
})();