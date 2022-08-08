import products from '../../database/products-local.js'

function getRelatedProducts(productName, siteId) {

    const selectedProduct = products.filter(p => p.name === productName)[0]; 

    let relatedProducts;

    if (siteId === 'MCO') {
        relatedProducts = products.filter(p => p.category === selectedProduct.category);

    } else {
        relatedProducts = products.filter(p => p.category === selectedProduct.category && p.installments > 1)
    }

    return {
        "solution": "first",
        "related_products": relatedProducts
    }
}

export default {
    getRelatedProducts
}