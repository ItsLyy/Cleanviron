const blog = {
  render() {
    return `
    
    `
  },

  afterRender() {
    const navItems = document.querySelectorAll('.nav__menu__item');
    navItems.forEach((item) => {
      item.classList.remove('onPage');
    });
    navItems[2].classList.add('onPage');
  }
}

export default blog;
