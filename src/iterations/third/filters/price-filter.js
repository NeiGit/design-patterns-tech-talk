import ProductFilter from './filter.js';

export default class PriceFilter extends ProductFilter {

    constructor (price) {
        super();
        this.price = price;
    }

    shouldBeIncluded(product) {
        return product.price <= this.price;
    }
}