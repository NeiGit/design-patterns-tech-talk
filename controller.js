import express from "express";
import exampleStrategy from './example-package/example-strategy.js'

// get related product strategies
const defaultStrategy = (productName, siteId) => {
    return {
        "message": "This is the default getRelatedProducts() strategy"
    }
}

const getRelatedProductsStrategiesMap = {
    "example-package": exampleStrategy,
    "default": defaultStrategy
}

let currentGetRelatedProductsStrategy = defaultStrategy;


// endpoints
const router = express.Router();

router.route("/configure").put(async (req, res) => {
    const packageName = req.body.package

    const newStrategy = getRelatedProductsStrategiesMap[packageName];

    if (!newStrategy) {
        res.status(400).json("Invalid package name: " + packageName)

    } else {
        currentGetRelatedProductsStrategy = newStrategy
        res.status(204).json()
    }
});

router.route("/related-products").post(async (req, res) => {
    const result = currentGetRelatedProductsStrategy(req.body.product_name, req.body.site_id)

    res.status(200).json(result);
});

export default router;