import Navigo from "navigo";

const router = new Navigo("/");

router.on({
    "/": () => {
        console.log("Home Page");
    },
    "/about": () => {
        console.log("About Page");
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

// const person = {
//     name: "Le Trong Dat",
//     "/": function () { },
// };