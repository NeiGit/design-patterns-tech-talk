export default class ArrowFunctionCompositeFilter {

    constructor (arrowFunctionFilters) {
        this.arrowFunctionFilters = arrowFunctionFilters;
    }

    shouldBeIncluded(product) {
        return this.arrowFunctionFilters.every(filter => filter(product));
    }
}