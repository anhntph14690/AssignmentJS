import Header from "../../components/header";
import Footer from "../../components/footer";

const AdminPage = {
    render() {
        return /*html*/`
            <div>
                ${Header.render()}
            </div>
            <h1 class="text-2xl my-10 font-bold">ADMIN</h1>
            <div class="max-w-md m-auto ">

                <a href="/admin/dashboard" class="mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <p>Dashboard</p>
                </a>
                <a href="/admin/news" class="mt-8 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <p>News</p>
                </a>
            </div>
            <div>
                ${Footer.render()}
            </div>

        `;
    },
};
export default AdminPage;