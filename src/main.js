import Navigo from "navigo";
import Header from "./components/header";
import Footer from "./components/footer";
import HomePage from "./pages/home";
import AdminPage from "./pages/admin/admin";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import Dashboard from "./pages/admin/dashboard";
import NewsPage from "./pages/admin/news";
import DetailNewsPage from "./pages/detailNews";
import Add from "./pages/admin/add";
import Edit from "./pages/admin/edit";






const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("header").innerHTML = Header.render();
    document.getElementById("app").innerHTML = content;
    document.getElementById("footer").innerHTML = Footer.render();
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/admin": () => {
        print(AdminPage.render());
    },
    "/signup": () => {
        print(Signup.render());
    },
    "/signin": () => {
        print(Signin.render());
    },
    "/admin/dashboard": () => {
        print(Dashboard.render());
    },
    "/admin/news": () => {
        print(NewsPage.render());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(DetailNewsPage.render(id));
    },
    "/admin/news/add": () => {
        print(Add.render());
    },
    "/admin/news/:id/edit": ({ data }) => {
        const { id } = data;
        print(Edit.render(id));
    },

});
router.resolve();