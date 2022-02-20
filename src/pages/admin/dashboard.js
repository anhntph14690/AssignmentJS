import NavAdmin from "../../components/NavAdmin";

const DashboardPage = {
    render() {
        return /*html*/`
        <div class="flex">
            <div class="">
                ${NavAdmin.render()}
            </div>
            <div class="w-full">
                <header class=" shadow">
                    <div class="mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <div class="lg:flex lg:items-center lg:justify-between">
                        <div class="flex-1 min-w-0">
                            <h2 class="text-2xl font-bold leading-7  00 sm:text-3xl sm:truncate text-[#7ac142]">
                            Quản lý bài viết
                            </h2>
                        </div>
                        <div class="mt-5 flex lg:mt-0 lg:ml-4">
                            <a href="/admin/news/add" class="sm:ml-3 underline no-underline">
                                <button
                                    type="button"
                                    class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white
                                     bg-[#7ac142] hover:bg-[#639b37] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    <!-- Heroicon name: solid/check -->
                                    <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                    Thêm mới
                                </button>
                            </a>
                        </div>
                        </div>
                    </div>
                </header>
                <main>
                    <div class=" mx-auto py-6 sm:px-6 lg:px-8">
                    </div>
                </main>
            </div>
        </div>
        `;
    },
};
export default DashboardPage;