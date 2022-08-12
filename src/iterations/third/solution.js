import products from '../../database/products-local.js'
import siteFilterFactory from './site-filter-factory.js'

function getSuggestedProducts(productId, siteId) {

    const selectedProduct = products.filter(p => p.id === productId)[0];

    const filter = siteFilterFactory.factoryMethod(siteId, selectedProduct);

    const suggestedProducts = products.filter(p => filter.shouldBeIncluded(p));

    return {
        "solution": "third",
        "suggested_products": suggestedProducts
    }
}

export default {
    getSuggestedProducts
}