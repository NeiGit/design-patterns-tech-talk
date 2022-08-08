import express from "express";
import firstStrategy from './iterations/first/solution.js'
import secondStrategy from './iterations/second/solution.js'
import thirdStrategy from './iterations/third/solution.js'


const getRelatedProductsStrategies = {
    "first": firstStrategy,
    "second": secondStrategy,
    "third": thirdStrategy
}

let currentStrategy = firstStrategy; // default value

// endpoints
const router = express.Router();

router.route("/configure").put(async (req, res) => {
    const packageName = req.body.package

    const newStrategy = getRelatedProductsStrategies[packageName];

    if (!newStrategy) {
        res.status(400).json("Invalid package name: " + packageName)

    } else {
        currentStrategy = newStrategy
        res.status(204).json()
    }
});

router.route("/related-products").post(async (req, res) => {
    const productName = req.body.product_name;
    const siteId = req.body.site_id;

    const result = currentStrategy.getRelatedProducts(productName, siteId)

    res.status(200).json(result);
});

export default router;