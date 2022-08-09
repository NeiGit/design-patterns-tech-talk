import CategoryFilter from "./filters/category-filter.js";
import InstallmentsFilter from "./filters/installments-filter.js";
import PriceFilter from "./filters/price-filter.js";
import CompositeFilter from "./filters/composite-filter.js";


const moreThanOneInstallmentFilterSingleton = new InstallmentsFilter(1);

const filterBySite = {
    "MCO": product => new CategoryFilter(product.category),
    "MLA": product => new CompositeFilter([new CategoryFilter(product.category), moreThanOneInstallmentFilterSingleton]),
    "MLU": product => new CompositeFilter([new CategoryFilter(product.category), moreThanOneInstallmentFilterSingleton]),
    "MLC": product => new CompositeFilter([new CategoryFilter(product.category), moreThanOneInstallmentFilterSingleton]),
    "MLM": product => new CompositeFilter([new CategoryFilter(product.category), new PriceFilter(1000)]),
    "MLB": product => new CompositeFilter([new CategoryFilter(product.category), new PriceFilter(2000), new InstallmentsFilter(3)])
}

function factoryMethod(siteId, product) {
    return filterBySite[siteId](product)
}

export default {
    factoryMethod
}

