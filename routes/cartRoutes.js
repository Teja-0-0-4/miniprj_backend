// routes/cartRoutes.js
const express = require('express');
const router = express.Router();
const cartApi = require('../apis/cartApis');

// Route to insert product into cart
router.post("/insert_cart", cartApi.insert_cart);

// Route to update product in cart
router.put("/update_cart", cartApi.update_cart);

// Route to fetch all cart data
router.get("/fetch_cart", cartApi.fetch_cart);

// Route to delete product from cart
router.delete("/delete_cart", cartApi.delete_cart);
// Export router
module.exports = router;
