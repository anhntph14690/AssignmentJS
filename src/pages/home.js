import Header from "../components/header";
import Banner from "../components/banner";
import NewsList from "../components/newsList";
import Footer from "../components/footer";



const HomePage = {
    render() {
        return /*html*/`
            <div>
                ${Header.render()}
            </div>
            <div>
                ${Banner.render()}
            </div>
            <div>
                ${NewsList.render()}
            </div>
            <div>
                ${Footer.render()}
            </div>
        `;
    },
};
export default HomePage;