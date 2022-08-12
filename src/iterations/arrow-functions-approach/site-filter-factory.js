import ArrowFunctionCompositeFilter from './arrow-function-composite-filter.js'

const filterBySite = {
    "MCO": product => new ArrowFunctionCompositeFilter([
        p => p.category === product.category
    ]),

    "MLA": product => new ArrowFunctionCompositeFilter([
        p => p.category === product.category, 
        p => p.installments > 1
    ]),

    "MLB": product => new ArrowFunctionCompositeFilter([
        p => p.category === product.category, 
        p => p.price <= 2000,
        p => p.installments > 3
    ])
}

function factoryMethod(siteId, product) {
    return filterBySite[siteId](product)
}

export default {
    factoryMethod
}

