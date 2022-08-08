import Filter from './filter.js';

export default class CategoryAndInstallmentsFilter extends Filter {

    constructor (category, price) {
        super();
        this.category = category;
        this.price = price;
    }

    matches(product) {
        return product.category === this.category && product.price <= this.price;
    }
}