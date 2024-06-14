// login/login.js
const express = require('express');
const router = express.Router();
const User = require('../model/User'); // Ensure the path is correct
const token = require('../token/token'); // JWT token generation

// User login Authentication
router.post('/auth', async (req, res) => {
    const { u_name, u_pwd } = req.body;

    try {
        // Find user in MongoDB
        const user = await User.findOne({ u_name, u_pwd });

        if (user) {
            // Generate JWT token
            const userPayload = { u_name: user.u_name, u_email: user.u_u_email };
            const myToken = token(userPayload, new Date().toString());
            res.json({ 'auth': 'success', token: myToken });
        } else {
            res.json({ 'auth': 'failed' });
        }
        console.log('Auth response sent');
    } catch (err) {
        console.error('Error in authentication:', err);
        res.status(500).json({ 'auth': 'error', 'message': 'Internal Server Error' });
    }
});

module.exports = router;
