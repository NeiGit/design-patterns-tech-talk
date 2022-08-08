import Filter from './filter.js';

export default class InstallmentsFilter extends Filter {

    constructor (installments) {
        super();
        this.installments = installments;
    }

    matches(product) {
        return product.installments > this.installments;
    }
}