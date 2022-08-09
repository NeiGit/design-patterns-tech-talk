import ProductFilter from './filter.js';

export default class CategoryAndInstallmentsFilter extends ProductFilter {

    constructor (category, price) {
        super();
        this.category = category;
        this.price = price;
    }

    shouldBeIncluded(product) {
        return product.category === this.category && product.price <= this.price;
    }
}