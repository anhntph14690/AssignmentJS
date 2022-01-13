import NewsList from "../components/newsList";

const NewsPage = {
    render() {
        return /*html*/ `
            <h1>News Page 1</h1>
            <div class="mr-4 text-right mr-4 ">
                <a href="/admin/news/add" class="bg-[#272f54] text-zinc-50 max-w-screen-sm">Add</a>
                
            </div>
            ${NewsList.render()}
        `;
    },
};
export default NewsPage;