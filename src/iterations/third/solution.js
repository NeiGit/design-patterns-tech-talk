import products from '../../database/products-local.js'
import siteFilterFactory from './site-filter-factory.js'

function getRelatedProducts(productName, siteId) {

    const selectedProduct = products.filter(p => p.name === productName)[0]; 

    const filter = siteFilterFactory.factoryMethod(siteId, selectedProduct);

    const relatedProducts = products.filter(p => filter.matches(p));

    return {
        "solution": "third",
        "related_products": relatedProducts
    }
}

export default {
    getRelatedProducts
}