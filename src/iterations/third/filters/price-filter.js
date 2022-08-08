import Filter from './filter.js';

export default class PriceFilter extends Filter {

    constructor (price) {
        super();
        this.price = price;
    }

    matches(product) {
        return product.price <= this.price;
    }
}