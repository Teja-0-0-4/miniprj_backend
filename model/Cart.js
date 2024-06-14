// model/Cart.js
const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    p_id: Number,
    p_cost: Number,
    qty: { type: Number, default: 1 },
    p_img: String,
    u_name: String
});

module.exports = mongoose.model("Cart", cartSchema);
