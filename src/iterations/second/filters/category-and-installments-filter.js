import Filter from './filter.js';

export default class CategoryAndInstallmentsFilter extends Filter {

    constructor (category) {
        super();
        this.category = category;
    }

    matches(product) {
        return product.category === this.category && product.installments > 1;
    }
}