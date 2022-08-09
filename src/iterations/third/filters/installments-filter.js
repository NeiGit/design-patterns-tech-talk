import ProductFilter from './filter.js';

export default class InstallmentsFilter extends ProductFilter {

    constructor (installments) {
        super();
        this.installments = installments;
    }

    shouldBeIncluded(product) {
        return product.installments > this.installments;
    }
}