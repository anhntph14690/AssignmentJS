import Navigo from "navigo";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProductPage from "./pages/products";
import DetailProductsPage from "./pages/products/detail";
import ContactPage from "./pages/contact";
import DashboardPage from "./pages/admin/dashboard";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import AdminNewsPage from "./pages/admin/news";
import AdminNewsAddPage from "./pages/admin/news/add";
import AdminEditPost from "./pages/admin/news/edit";
import DetailNewsPage from "./pages/detail";
import CartPage from "./pages/cart";


const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
    if (content.afterRender) content.afterRender(id);
};

router.on("/admin/*", () => {}, {
    // Phương thức before được gọi trước khi render nội dung ra trình duyệt
    before: (done) => {
        if (localStorage.getItem('user')) {
            // lấy id trong localStorage
            const userId = JSON.parse(localStorage.getItem('user')).id;
            // Nếu userid == 1 thì render
            if (userId) { // userId === 5 là id user đăng nhập
                done();
            } else {
                // ngược lại nếu ko phải admin quay về trang chủ
                document.location.href = "/"
            }
        } else {
            document.location.href = "/"
        }

    }
})

router.on({
    "/": () => print(HomePage),
    "/about": () => print(AboutPage),
    "/contact": () => print(ContactPage),

    //product
    "/products": () => print(ProductPage),
    "/products/:id": (value) => print(DetailProductsPage, value.data.id),

    //new
    "/news/:id": (value) => print(DetailNewsPage, value.data.id),

    //admin
    "/admin/dashboard": () => print(DashboardPage),
    "/admin/news": () => print(AdminNewsPage),
    "/admin/news/:id/edit": ({ data }) => print(AdminEditPost, data.id),
    "/admin/news/add": () => print(AdminNewsAddPage),
    "/signup": () => print(Signup),
    "/signin": () => print(Signin),
    "/cart": () => print(CartPage)
});
router.resolve();
