import contactUs from "../views/pages/contactus";
import home from "../views/pages/home";
import blog from "../views/pages/blog";
import information from "../views/pages/information";

const routes = {
  '/': home,
  '/home': home,
  '/information': information,
  '/blog': blog,
  '/contactus': contactUs,
};

export default routes;