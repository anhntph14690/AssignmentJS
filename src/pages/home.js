import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import NewsList from "../components/newsList";

const HomePage = {
    async render() {
        return /*html*/`
            <div class="max-w-6xl mx-auto">
                <div id="header">
                    ${Header.render()}
                </div>
                <div class="banner">
                    ${Banner.render()}
                </div>
                <div>
                    ${await NewsList.render()}
                </div>
                ${Footer.render()}
            </div>
        `;
    },
    afterRender() {
        Header.afterRender()
    }
};
export default HomePage;