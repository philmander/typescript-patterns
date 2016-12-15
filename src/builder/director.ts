import Builder from './builders/builder';
import Product from './products/product';

import fetch from './mock--fetch';

class Director {

    constructor(private builder: Builder) {}

    async construct(): Promise<Product> {

        const [ docs, images, forms ] = await Promise.all([ this.getDocuments(), this.getImages(), this.getForms() ]);

        this.builder
            .addFiles(docs, 'document')
            .addFiles(images, 'image')
            .addFiles(forms, 'form');

        return this.builder.build();
    }

    async getDocuments(): Promise<any> {
        return fetch('/api/documents').then(getJsonResponse);
    }

    async getImages(): Promise<any> {
        return fetch('/api/images').then(getJsonResponse);
    }

    async getForms(): Promise<any> {
        return fetch('/api/forms').then(getJsonResponse);
    }
}

function getJsonResponse(response) {
    if (response.status >= 200 && response.status < 300) {
        return response.json()
    } else {
        throw new Error(response.statusText);
    }
}

export default Director