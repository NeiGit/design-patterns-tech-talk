import CategoryFilter from "./filters/category-filter.js";
import InstallmentsFilter, {getMoreThanOneInstallmentFilterInstance} from "./filters/installments-filter.js";
import PriceFilter from "./filters/price-filter.js";
import CompositeFilter from "./filters/composite-filter.js";



const filterBySite = {
    "MCO": product => new CategoryFilter(product.category),

    "MLA": product => new CompositeFilter([
        new CategoryFilter(product.category), 
        getMoreThanOneInstallmentFilterInstance()
    ]),

    "MLU": product => new CompositeFilter([
        new CategoryFilter(product.category), 
        getMoreThanOneInstallmentFilterInstance()
    ]),

    "MLC": product => new CompositeFilter([
        new CategoryFilter(product.category), 
        getMoreThanOneInstallmentFilterInstance()
    ]),

    "MLM": product => new CompositeFilter([
        new CategoryFilter(product.category), 
        new PriceFilter(1000)
    ]),

    "MLB": product => new CompositeFilter([
        new CategoryFilter(product.category), 
        new PriceFilter(2000), 
        new InstallmentsFilter(3)
    ])
}

function factoryMethod(siteId, product) {
    return filterBySite[siteId](product)
}

export default {
    factoryMethod
}

