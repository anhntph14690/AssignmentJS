import Navigo from "navigo";
import HomePage from "./pages/home";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("app").innerHTML = content;
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print("About Page");
    },
    "/product": () => {

    },
});
router.resolve();

// class KhuanBanh {
//     constructor(luongDuong, luongBot) {
//         this.luongDuong = luongDuong;
//         this.luongBot = luongBot;
//     }

//     showInfo() {
//         console.log(`
//             Đường: ${this.luongDuong}
//             Bột: ${this.luongBot}
//         `);
//     }
// }

// const banhDeo = new KhuanBanh(10, 20);
// const banhNuong = new KhuanBanh(20, 30);

// console.log(banhDeo.luongDuong);
// banhDeo.showInfo();
// banhNuong.showInfo();

// function sum(a,b){
// const numberA = a;
// }
// sum(3,4)