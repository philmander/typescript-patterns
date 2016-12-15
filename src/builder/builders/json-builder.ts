import Builder from './builder';
import JsonProduct from "../products/json-product";

class JsonBuilder extends Builder{

    build() {
        this.sortFiles();
        return new JsonProduct(this.files);
    }
}

export default JsonBuilder;