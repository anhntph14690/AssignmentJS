import Footer from "../../components/footer";
import Header from "../../components/header";
import { getAll } from '../../api/products';

const ProductPage = {
    async render() {
        const { data } = await getAll();
        return /*html*/`
            <div class="max-w-6xl mx-auto">
                ${Header.render()}
                <h2 class="font-semibold text-2xl uppercase text-lime-500 my-4 ">Sản phẩm</h2>
                <div class="grid grid-cols-3 gap-8">
                    ${data.map((product) => `
                        <div class="p-4 rounded-3xl bg-[#ffffff1a]">
                            <a href="/#/products/${product.id}">
                                <img src="${product.img}" alt="" />
                            </a>
                            <h3 class="my-3"><a  href="/#/products/${product.id}" class="font-semibold text-lg text-lime-500">${product.name}</a></h3>                    
                            <p class="text-white">${product.desc}</p>
                        </div>
                    `).join("")}
                </div>
                ${Footer.render()}
            </div>

        `
    },
    afterRender() {
        Header.afterRender()
    }
};
export default ProductPage;