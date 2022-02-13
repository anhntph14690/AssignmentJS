import { signin, signup } from "../api/user";
import toastr from "toastr";
import "toastr/build/toastr.min.css"

const Signin = {
    async render() {
        return /*html*/`
            <form id="formSignin">
                <input type="email"  placeholder="Email" id="email"/>
                <input type="password"  placeholder="Password" id="password"/>
                <button class="text-white">Đăng nhập</button>
            </form>
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