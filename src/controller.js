import express from "express";
import firstStrategy from './iterations/first/solution.js'
import secondStrategy from './iterations/second/solution.js'
import thirdStrategy from './iterations/third/solution.js'


const getSuggestedProductsStrategies = {
    "first": firstStrategy,
    "second": secondStrategy,
    "third": thirdStrategy
}

let currentStrategy = firstStrategy; // default value

// endpoints
const router = express.Router();

router.route("/configure").put(async (req, res) => {
    const packageName = req.body.package

    const newStrategy = getSuggestedProductsStrategies[packageName];

    if (!newStrategy) {
        res.status(400).json("Invalid package name: " + packageName)

    } else {
        currentStrategy = newStrategy
        res.status(204).json()
    }
});

router.route("/suggested-products/:productId/:siteId").get(async (req, res) => {
    const productId = parseInt(req.params.productId);
    const siteId = req.params.siteId;

    const result = currentStrategy.getSuggestedProducts(productId, siteId)

    res.status(200).json(result);
});

export default router;