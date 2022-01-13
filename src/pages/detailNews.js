import data from "../data";

const DetailNewsPage = {
    render(id) {
        const result = data.find((post) => post.id === id);
        return /*html*/ `
            <div class="mr-4 text-right mr-4 ">
                <a href="/add" class="bg-[#272f54] text-2xl text-zinc-50 max-w-screen-sm">Edit</a>
                
            </div>
            <h1 class="font-semibold text-lg text-orange-500">${result.title}</h1>
            <img src="${result.img}" />
            <p>${result.desc}</p>
        `;
    },
};
export default DetailNewsPage;