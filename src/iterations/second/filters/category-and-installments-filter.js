import ProductFilter from './filter.js';

export default class CategoryAndInstallmentsFilter extends ProductFilter {

    constructor (category, installments) {
        super();
        this.category = category;
        this.installments = installments;
    }

    shouldBeIncluded(product) {
        return product.category === this.category && product.installments > this.installments;
    }
}