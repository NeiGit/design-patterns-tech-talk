import products from '../../database/products-local.js'

function getSuggestedProducts(productId, siteId) {

    const selectedProduct = products.filter(p => p.id === productId)[0];

    let suggestedProducts;

    if (siteId === 'MCO') {
        suggestedProducts = products.filter(p => p.category === selectedProduct.category);

    } else {
        suggestedProducts = products.filter(p => p.category === selectedProduct.category && p.installments > 1)
    }

    return {
        "solution": "first",
        "suggested_products": suggestedProducts
    }
}

export default {
    getSuggestedProducts
}