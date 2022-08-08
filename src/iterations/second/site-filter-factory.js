import CategoryFilter from "./filters/category-filter.js";
import CategoryAndInstallmentsFilter from "./filters/category-and-installments-filter.js";
import CategoryAndPriceFilter from "./filters/category-and-price-filter.js";

const filterBySite = {
    "MCO": product => new CategoryFilter(product.category),
    "MLA": product => new CategoryAndInstallmentsFilter(product.category),
    "MLU": product => new CategoryAndInstallmentsFilter(product.category),
    "MLC": product => new CategoryAndInstallmentsFilter(product.category),
    "MLM": product => new CategoryAndPriceFilter(product.category, 1000)
}

function factoryMethod(siteId, product) {
    return filterBySite[siteId](product)
}

export default {
    factoryMethod
}

