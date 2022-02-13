import { signup } from "../api/user";


const Signup = {
    async render() {
        return /*html*/`
            <!-- <form id="formSignup">
                <input type="text" placeholder="Username" id="username"/>
                <input type="email"  placeholder="Email" id="email"/>
                <input type="password"  placeholder="Password" id="password"/>
                <button class="text-white">Đăng ký</button>
            </form> -->

            <div id="body" class="container_all">
                <div class="container" id="container">
                    <div class="form-container sign-in-container">
                        <form id="formSignup">
                            <h1 class="text-4xl py-4">Đăng Ký</h1>
                            <span>Hãy đăng ký tài khoản của bạn!</span>
                            <input class="input_login" id="username" type="text" placeholder="Username" />
                            <input class="input_login" id="email" type="email" placeholder="Email" />
                            <input class="input_login" id="password" type="password" placeholder="Password" />
                            <button id="button_login" class="bg-cyan-900 text-white">Đăng ký</button>
                            
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
        const formSignup = document.querySelector('#formSignup');
        formSignup.addEventListener('submit', function (e) {
            e.preventDefault();
            signup({
                username: document.querySelector('#username').value,
                email: document.querySelector('#email').value,
                password: document.querySelector('#password').value
            });
            window.location.href = "/#/";
            // thông báo bạn đăng nhập thành công....
        });
    }


};
export default Signup;