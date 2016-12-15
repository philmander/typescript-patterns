import Builder from './builder';
import HtmlProduct from "../products/html-product";

class HtmlBuilder extends Builder{

    build() {
        this.sortFiles();
        return new HtmlProduct(this.files);
    }
}

export default HtmlBuilder;