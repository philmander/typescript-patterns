import Product from "../products/product";

abstract class Builder {

    protected files: any[] = [];

    addFiles(files: any[], type: string) {
        files.forEach(file => file.type = type);
        this.files = this.files.concat(files);
        return this;
    }

    protected sortFiles() {
        this.files.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
    }

    abstract build(): Product;
}

export default Builder;