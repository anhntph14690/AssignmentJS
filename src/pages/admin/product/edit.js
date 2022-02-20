import NavAdmin from "../../../components/NavAdmin";
import { update } from '../../../api/products';
import { get } from '../../../api/products';
// import axios from "axios";

const AdminEditProduct = {
    async render(id) {
        const { data } = await get(id);
        return /*html*/`
            <div class="flex">
                <div class="">
                        ${NavAdmin.render()}
                </div>
                <div class="w-full">
                    <main>

                        <div class=" max-w-xl card card-outline-secondary mb-20  mx-auto mt-10">
                            <div class="card-body">
                                <h3 class="text-center">Sửa Sản Phẩm</h3>
                                <hr>
                                <div class="alert alert-info p-2 pb-3">
                                    ĐỪNG ĐỂ TRỐNG NHÉ!
                                </div>
                                <form class="form" id="form-edit-products">
                                    <div class="form-group">
                                        <label>Title</label>
                                        <input type="text" class="form-control" value="${data.name}" id="name-products">
                                    </div>
                                    <br>
                                    <div class="form-group">
                                        <label>Photo</label>
                                        <input type="file" class="form-control" value="${data.img}" id="img-products">
                                    </div>
                                    <div class="form-group">
                                        <label>Desc</label>
                                        <input name=""
                                        id="desc-products" 
                                        value="${data.desc}"
                                        cols="0" 
                                        rows="8" 
                                        class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <label>Price</label>
                                        <input type="text" class="form-control" value="${data.price}" id="price-products">
                                    </div>
                                    
                                    <hr>
                                    <div class="flex mx-auto">
                                        <a href="/admin/products">
                                            <button type="button" class="btn btn-success btn-lg btn-block">Back</button>
                                        </a>
                                        <div class="col-md-6">
                                            <button type="reset" class="btn-default text-2xl btn-block mt-4 ml-44 text-rose-500">Reset</button>
                                        </div>
                                        <div class="col-md-6">
                                            <button class="btn btn-success btn-lg btn-block mt-2.5 ml-32">Sửa</button>
                                        </div>
                                    </div>
                                </form>

                
            
                            </div>
                                
                        </div>
                    </main>
                </div>
            </div>

        `;
    },
    afterRender(id) {
        const formEdit = document.querySelector('#form-edit-products');

        formEdit.addEventListener('submit', (e) => {
            e.preventDefault();
            update({
                id, name: document.querySelector('#name-products').value,

                desc: document.querySelector('#desc-products').value,
                price: document.querySelector('#price-products').value,



            })
                .then((result) => console.log(result.data))
                .catch((error) => console.log(error))
        });
    },
};
export default AdminEditProduct;