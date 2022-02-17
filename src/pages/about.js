import Footer from "../components/footer";
import Header from "../components/header";

const AboutPage = {
    render() {
        return /* html */`
            <div class="max-w-6xl mx-auto">
                ${Header.render()}
                <h1 class="text-white">AboutPage</h1>
                ${Footer.render()}
            </div>
        `;
    },
    afterRender() {
        Header.afterRender()
    }
};
export default AboutPage;