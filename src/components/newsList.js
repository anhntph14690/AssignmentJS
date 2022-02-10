// import data from "../data";
import { getAll } from '../api/posts';

const NewsList = {
    async render() {
        // Chờ thằng axios.get truy cập API và lấy dữ liệu, 
        // lấy dữ liệu xong sẽ trả về và gán vào biến response
        const { data } = await getAll();
        return /*html*/`
            <h2 class="font-semibold text-2xl uppercase text-lime-500 my-4">Tin tức học tập</h2>
            <div class="grid grid-cols-3 gap-8">
                ${data.map((post) => `
                    <div class="border p-4">
                        <a href="/news/${post.id}">
                            <img src="${post.img}" alt="" />
                        </a>
                        <h3 class="my-3"><a  href="/news/${post.id}" class="font-semibold text-lg text-lime-500">${post.title}</a></h3>                    
                        <p class="text-white">${post.desc}</p>
                    </div>
                `).join("")}
            </div>
        `
    },
};
export default NewsList;