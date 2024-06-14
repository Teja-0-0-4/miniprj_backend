// Import express module
const express = require('express');
// Create router instance
const router = express.Router();
// Import userApis
const userApis = require('../apis/userApis');

// Route to insert a new user
router.post("/insert_user", userApis.insert_user);

// Route to fetch all users
router.get("/fetch_user", userApis.users_all);

// Route to update a user
router.put("/update_user", userApis.update_user);

// Route to delete a user
router.delete("/delete_user", userApis.delete_user);

// Export router
module.exports = router;
