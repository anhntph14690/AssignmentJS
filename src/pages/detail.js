import { get } from '../api/posts';
import Header from '../components/header';
import Footer from '../components/footer';


const DetailNewsPage = {
    async render(id) {
        const { data } = await get(id);
        return /*html*/`
            



            <div class="max-w-6xl mx-auto">
                ${Header.render()}
                <h2 class="font-semibold text-2xl uppercase text-lime-500 my-4 ">News > ${data.title}</h2>
                <div class="bg-[#ffffff1a] max-w-6xl rounded-2xl">
                    
                    <div class="p-4 rounded-3xl leading-10">
                        <div class="text-white">
                            <h1>${data.title}</h1> 
                        </div>
                        <div class=" max-w-2xl">
                            <img src="${data.img}" class="max-w-2xl"/>
                        </div>
                        <div class="text-white">
                            <p>${data.desc}</p>
                        </div>
                        
                           
                            
                    </div>
                    
                </div>
                ${Footer.render()}
            </div>
        `
    },
};
export default DetailNewsPage;