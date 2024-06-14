// Import express module
const express = require('express');
// Create router instance
const router = express.Router();
// Import productApi
const productApi = require('../apis/productApis');

// Route to insert a new product
router.post("/insert_product", productApi.insert_product);

// Route to fetch all products
router.get("/fetch", productApi.products_all);

// Route to update a product
router.put("/update_product", productApi.update_product);

// Route to delete a product
router.delete("/delete_product", productApi.delete_product);

// Export router
module.exports = router;
