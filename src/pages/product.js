import Footer from "../components/footer";
import Header from "../components/header";

const ProductPage = {
    render() {
        return /* html */`
            <div class="max-w-5xl mx-auto">
                ${Header.render()}
                <h1 class="text-white">ProductPage</h1>
                ${Footer.render()}
            </div>
        `;
    },
};
export default ProductPage;