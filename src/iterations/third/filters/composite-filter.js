import ProductFilter from './filter.js';

export default class CompositeFilter extends ProductFilter {

    constructor (filters) {
        super();
        this.filters = filters;
    }

    shouldBeIncluded(product) {
        return this.filters.every(filter => filter.shouldBeIncluded(product));
    }
}