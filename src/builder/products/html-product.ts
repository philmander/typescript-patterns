import Product from './product';

class HtmlProduct implements Product {

    private html: string;

    constructor(files: any[]){
        const fileItems = files.map(file => `<li class="${file.type}"><b>${file.name}</b> (${file.type})</li>`);
        this.html = `<ul class=file-list>${fileItems.join('')}</ul>`;
    }

    getOutput() {
        return this.html;
    }
}

export default HtmlProduct;