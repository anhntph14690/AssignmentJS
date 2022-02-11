import { signin, signup } from "../api/user";

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
                localStorage.setItem('user', JSON.stringify(data.user))
                if (data.user.id == 1) {
                    document.location.href = "/admin/news"
                } else {
                    document.location.href = "/"
                }
                } catch (error) {
                    console.log(error.response.data)
                }

        });
    },
};
export default Signin;