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

let moreThanOneInstallmentFilterInstance;

export const getMoreThanOneInstallmentFilterInstance = () => {
    if (!moreThanOneInstallmentFilterInstance) {
        moreThanOneInstallmentFilterInstance = new InstallmentsFilter(1);
    }

    return moreThanOneInstallmentFilterInstance;
}