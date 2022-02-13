import { signin, signup } from "../api/user";
import toastr from "toastr";
import "toastr/build/toastr.min.css"

const Signin = {
    async render() {
        return /*html*/`
            <!-- <form id="formSignin">
                <input type="email"  placeholder="Email" id="email"/>
                <input type="password"  placeholder="Password" id="password"/>
                <button class="text-white">Đăng nhập</button>
            </form> -->
            <div id="body" class="container_all">
                <div class="container" id="container">
                    <div class="form-container sign-in-container">
                        <form id="formSignin">
                            <h1 class="text-4xl py-4">Đăng nhập</h1>
                            <span>Hãy đăng nhập tài khoản của bạn!</span>
                            <input class="input_login" id="email" type="email" placeholder="Email" />
                            <input class="input_login" id="password" type="password" placeholder="Password" />
                            <a href="#">Quên mật khẩu?</a>
                            <button id="button_login" class="bg-cyan-900 text-white">Đăng nhập</button>
                            
                        </form>
                    </div>
                    <div class="overlay-container">
                        <div class="overlay">
                            <div class="overlay-panel overlay-right">
                                <img src="https://res.cloudinary.com/dsirnbuyv/image/upload/v1644767257/logo_white02_zocquw.png" alt="" width="100px">
                                <!-- <h1>Poly Mac</h1> -->
                                <p>Đến với <b>Poly Mac</b> bạn sẽ được mua sắm, bình luận về sản
                                    phẩm của chúng tôi.
                                    Sản phẩm của chúng tôi cũng sẽ là sản phẩm của bạn. <b>HÃY KHÁM PHÁ NGAY!.</b> </p>
                                <!-- <button class="ghost_signin" id="button_login">Đăng ký</button> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        `;
    },
    afterRender() {
        const formSignin = document.querySelector("#formSignin");
        formSignin.addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                // call api
                const { data } = await signin({
                    email: document.querySelector("#email").value,
                    password: document.querySelector("#password").value,
                });
                if (data) {
                    localStorage.setItem('user', JSON.stringify(data.user));
                    toastr.success("Đăng nhập thành công");
                    setTimeout(() => {
                        if (data.user.id === 1) {
                            document.location.href = "/admin/news"
                        } else {
                            document.location.href = "/"
                        }
                    }, 2000);
                }

            } catch (error) {
                toastr.error(error.response.data);
            }

        })
    },
};
export default Signin;