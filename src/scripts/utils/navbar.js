const navbarLogic = () => {
  window.onscroll = () => {
    const header = document.querySelector('header');
    const fixNav = header.offsetTop;

    if (window.pageYOffset > fixNav) {
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
    }
  };
}

export default navbarLogic;
