import Product from './product';

class JsonProduct implements Product {

    private json: string;

    constructor(files: any[]){
        const fileItems = files.map(file => ({ type: file.type, name: file.name}));
        this.json = JSON.stringify(fileItems, null, '  ');
    }

    getOutput() {
        return this.json;
    }
}

export default JsonProduct;