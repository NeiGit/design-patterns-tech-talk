import Filter from './filter.js';

export default class CategoryFilter extends Filter {

    constructor (category) {
        super();
        this.category = category;
    }

    matches(product) {
        return product.category === this.category;
    }
}