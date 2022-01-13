const AdminPage = {
    render() {
        return /*html*/`
            <h1 class="text-2xl my-10 font-bold">ADMIN</h1>
            <div class="max-w-screen-md m-auto columns-2">
            <div class="bg-[#272f54] block py-3 px-5 text-4xl hover:bg-[#cb7802] border-2 border-black">
                <a href="/admin/dashboard" class="ml-20 text-zinc-50 italic font-mono">Dashboard</a>
            </div>
            <div class="bg-[#272f54] block py-3 px-5 text-4xl hover:bg-[#cb7802] border-2 border-black">
                <a href="/admin/news" class="ml-28 text-zinc-50 italic font-mono">News</a>
            </div>
            </div>
        `;
    },
};
export default AdminPage;