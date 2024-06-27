import "../styles/style.scss";
import navbarLogic from "./utils/navbar"

import App from "./views/app";

const app = new App({
  content: document.querySelector('.main-content'),
})

window.addEventListener("DOMContentLoaded", () => {
  navbarLogic();
});

// window.addEventListener("load", () => {
//   app.renderPage();
// })

// window.addEventListener('hashchange', () => {
//   app.renderPage();
// })
