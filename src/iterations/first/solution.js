import products from '../../database/products-local.js'

function getSuggestedProducts(productName, siteId) {

    const selectedProduct = products.filter(product => product.name === productName)[0]; 

    let suggestedProducts;

    if (siteId === 'MCO') {
        suggestedProducts = products.filter(product => product.category === selectedProduct.category);

    } else {
        suggestedProducts = products.filter(product => product.category === selectedProduct.category && product.installments > 1)
    }

    return {
        "solution": "first",
        "suggested_products": suggestedProducts
    }
}

export default {
    getSuggestedProducts
}