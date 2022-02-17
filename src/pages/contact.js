import Footer from "../components/footer";
import Header from "../components/header";

const ContactPage = {
    render() {
        return /* html */`
            <div class="max-w-6xl mx-auto">
                ${Header.render()}
                <h1 class="text-white">ContactPage</h1>
                ${Footer.render()}
            </div>
        `;
    },
};
export default ContactPage;