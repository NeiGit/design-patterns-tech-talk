import ProductFilter from './filter.js';

export default class CategoryAndInstallmentsFilter extends ProductFilter {

    constructor (category) {
        super();
        this.category = category;
    }

    shouldBeIncluded(product) {
        return product.category === this.category && product.installments > 1;
    }
}