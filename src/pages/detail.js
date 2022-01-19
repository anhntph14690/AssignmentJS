// import data from "../data";

const DetailNewsPage = {
    render(id) {
        return fetch(`https://61e7b3a8e32cd90017acbca5.mockapi.io/anhntph14690/${id}`)
            .then((response) => response.json())
            .then((data) => `
                <h1>${data.title}</h1>
                <img src="${data.img}" />    
                <p>${data.desc}</p>
            `);

        // const result = data.find((post) => post.id === id);
    },
};
export default DetailNewsPage;