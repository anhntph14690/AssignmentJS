import { signin, signup } from "../api/user";

const Signin = {
    async render() {
        return /*html*/`
            <form id="formSignin">
                <input type="email"  placeholder="Email" id="email"/>
                <input type="password"  placeholder="Password" id="password"/>
                <button>Đăng nhập</button>
            </form>
        `;
    },
    afterRender() {
        const formSignin = document.querySelector("#formSignin");
        formSignin.addEventListener("submit", async (e) => {
            e.preventDefault();
            // call api
            const response = await signin({
                email: document.querySelector("#email").value,
                password: document.querySelector("#password").value,
            });
            localStorage.setItem('user', JSON.stringify(data.user))
        });
    },
};
export default Signin;