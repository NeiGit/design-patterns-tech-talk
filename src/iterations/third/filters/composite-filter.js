import Filter from './filter.js';

export default class CompositeFilter extends Filter {

    constructor (filters) {
        super();
        this.filters = filters;
    }

    matches(product) {
        return this.filters.every(filter => filter.matches(product));
    }
}