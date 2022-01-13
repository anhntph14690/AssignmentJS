import Navigo from "navigo";
import Header from "./components/header";
import HomePage from "./pages/home";
import AdminPage from "./pages/admin";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import Dashboard from "./pages/dashboard";
import NewsPage from "./pages/news";
import DetailNewsPage from "./pages/detailNews";
import Add from "./pages/add";
import Edit from "./pages/edit";






const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("header").innerHTML = Header.render;
    document.getElementById("app").innerHTML = content;
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
    "/add": () => {
        print(Add.render());
    },
    "/edit": () => {
        print(Edit.render());
    },
    
});
router.resolve();