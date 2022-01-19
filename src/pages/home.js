import Header from "../components/header";
import Banner from "../components/banner";
import NewsList from "../components/newsList";
import Footer from "../components/footer";



const HomePage = {
    async render() {
        return /*html*/`
            <div>
                <div>
                    ${Header.render()}
                </div>
                <div>
                    ${Banner.render()}
                </div>
                <div>
                    ${await NewsList.render()}
                </div>
                <div>
                    ${Footer.render()}
                </div>
            </div>
        `;
    },
};
export default HomePage;