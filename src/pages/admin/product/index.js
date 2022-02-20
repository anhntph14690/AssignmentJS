import { getAll, remove } from "../../../api/products";
import NavAdmin from "../../../components/NavAdmin";

const AdminProductPage = {
    async render() {
        const { data } = await getAll();
        return /*html*/`
        <div class="flex">
            <div class="">
                ${NavAdmin.render()}
            </div>
            <div class="w-full">
                <header class="shadow">
                    <div class="mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <div class="lg:flex lg:items-center lg:justify-between">
                        <div class="flex-1 min-w-0">
                            <h2 class="text-2xl font-bold leading-7 text-[#7ac142] sm:text-3xl sm:truncate">
                            Quản lý sản phẩm
                            </h2>
                        </div>
                        <div class="mt-5 flex lg:mt-0 lg:ml-4">
                            <a href="/admin/products/add" class="sm:ml-3 underline no-underline">
                                <button
                                    type="button"
                                    class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#7ac142] hover:bg-[#639b37] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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

                        <div class="mb-4">
                            <!-- <div class="card-header text-white">
                                <ion-icon name="chatbox-ellipsesv"></ion-icon>
                               Quản lý 
                                
                            </div> -->
                            <div class="card-body "> <!-- bg-[#ffffff0d] -->
                                <table class="table table-striped custom-table">
                                    <thead>
                                        <tr class="text-white">
                                            <th scope="col">STT</th>
                                            <th scope="col">ẢNH</th>
                                            <th scope="col">TÊN</th>
                                            <th scope="col">GIÁ</th>
                                            <th scope="col">CHỨC NĂNG</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${data.map((products, index) => `
                                        
                                            <tr scope="row" >
                                                
                                                <td class="text-white" >${index + 1}</td>
                                                <td ><img src="${products.img}" class="border" width="50"/></td>
                                                <td class="text-white" >${products.name}</td>
                                                <td class="text-white" >${products.price}$</td>
                                                <td class="space-x-10">
                                                    <a href="/admin/products/${products.id}/edit" class="text-lime-500 underline no-underline ">Edit</a>
                                                    <button data-id=${products.id} class="btn btn-remove mt-3"><p class="text-red-600">Remove</p></button>
                                                </td>
                                                
                                            </tr>
                                        `).join("")}

                                        
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    
                </main>
            </div>
        </div>

        `;
    },
    afterRender() {
        // lấy toàn bộ danh sách button có class là .btn
        const buttons = document.querySelectorAll('.btn');
        // tạo vòng lặp để lấy ra từng button
        buttons.forEach(button => {
            // sử dụng dataset để lấy id từ data-*
            const id = button.dataset.id;
            // click vào button thì xóa phần tử trong mảng
            // dựa vào ID vừa lấy được
            button.addEventListener('click', () => {
                const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
                if (confirm) {
                    remove(id).them(() => {
                        console.log("Bạn đã xoá thành công.")
                        reRender(AdminProductPage, "#app");
                    });
                }
            })
        });
    }
};
export default AdminProductPage;