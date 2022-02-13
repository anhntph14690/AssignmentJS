export const reRender = async (component, dom) => { //domElement
    if (component){
        document.querySelector(dom).innerHTML = await component.render(); //domElement
        if (component.afterRender) component.afterRender();
    }
}