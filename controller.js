import express from "express";
import exampleStrategy from './example-package/example-implementation.js'

const router = express.Router();

const defaultStrategy = (productId, siteId) => {
    return {
        "message": "This is the default getRelatedProducts() strategy"
    }
}

const strategyByPackage = {
    "example-package": exampleStrategy,
    "default": defaultStrategy
}

let currentStrategy = defaultStrategy;

router.route("/configure").put(async (req, res) => {
    const packageName = req.body.package

    const newStrategy = strategyByPackage[packageName];

    if (!newStrategy) {
        res.status(400).json("Invalid package name")
        
    } else {
        currentStrategy = newStrategy
        res.status(204).json()
    }
});

router.route("/related-products").post(async (req, res) => {
    const result = currentStrategy(req.body.product_id, req.body.site_id)

    res.status(200).json(result);
});

export default router;