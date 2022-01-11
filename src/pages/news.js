import NewsList from "../components/newsList";

const NewsPage = {
    render() {
        return /*html*/ `
            <h1>News Page 1</h1>
            ${NewsList.render()}
        `;
    },
};
export default NewsPage;