import axios from "axios";
import { add } from "../../../api/products";
import NavAdmin from "../../../components/NavAdmin";
// import $ from 'jquery';
// import validate from 'jquery-validation';

const AdminProductAddPage = {
    render() {
        return /*html*/ `
        <div class="flex">
            <div class="">
                    ${NavAdmin.render()}
            </div>
            <div class="w-full">
                
                <main>

                    <div class=" max-w-xl card card-outline-secondary mb-20  mx-auto mt-10">
                        <div class="card-body">
                            <h3 class="text-center">Thêm Sản Phẩm</h3>
                            <hr>
                            <div class="alert alert-info p-2 pb-3">
                                ĐỪNG ĐỂ TRỐNG NHÉ!
                            </div>
                            <form class="form" action="" id="form-add-products">
                                <div class="form-group">
                                    <label>Title</label>
                                    <input type="text" class="form-control" id="name-products" placeholder="Name">
                                </div>
                                <br>
                                <div class="form-group">
                                    <label>Photo</label>
                                    <input type="file"class="form-control" id="img-products">
                                </div>
                                <div class="form-group">
                                    <label>Desc</label>
                                    <textarea name=""
                                    id="desc-products" 
                                    cols="0" 
                                    rows="8" 
                                    class="form-control"
                                    placeholder="Desc"></textarea>
                                </div>
                                <div class="form-group">
                                    <label>Price</label>
                                    <input type="number" class="form-control" id="price-products" placeholder="Price">
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
                                        <button class="btn btn-success btn-lg btn-block mt-2.5 ml-32">Add</button>
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
    afterRender() {
        const formAdd = document.querySelector("#form-add-products");
        const imgProducts = document.querySelector("#img-products");

        imgProducts.addEventListener("change", (e) => {
            const file = e.target.files[0];
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "jkbdphzy");

            axios({
                url: "https://api.cloudinary.com/v1_1/ecommercer2021/image/upload",
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-formendcoded",
                },
                data: formData,
            }).then((res) => {
                formAdd.addEventListener("submit", (e) => {
                    e.preventDefault();
                    add({
                        name: document.querySelector("#name-products").value,
                        img: res.data.secure_url,
                        desc: document.querySelector("#desc-products").value,
                        price: document.querySelector("#price-products").value,

                    })
                        .then((result) => console.log(result.data))
                        .catch((error) => console.log(error));
                });
            });
        });
    },
};
export default AdminProductAddPage;


