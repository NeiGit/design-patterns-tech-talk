import products from '../../database/products-local.js'
import siteFilterFactory from './site-filter-factory.js'

function getSuggestedProducts(productName, siteId) {

    const selectedProduct = products.filter(product => product.name === productName)[0]; 

    const filter = siteFilterFactory.factoryMethod(siteId, selectedProduct);

    const suggestedProducts = products.filter(product => filter.shouldBeIncluded(product));

    return {
        "solution": "second",
        "suggested_products": suggestedProducts
    }
}

export default {
    getSuggestedProducts
}