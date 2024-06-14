// apis/cartApis.js
const Cart = require('../model/Cart');

// Insert product into cart
const insert_cart = async (req, res) => {
    try {
        const obj = req.body;
        const newCartItem = new Cart(obj);
        await newCartItem.save();
        console.log("Product in Cart inserted");
        res.json({ 'cartInsert': 'success' });
    } catch (err) {
        console.log('Error in cart insertion: ', err);
        res.json({ 'cartInsert': 'Error ' + err });
    }
};

// Update product in cart (increase quantity by 1)
const update_cart = async (req, res) => {
    try {
        const { p_id, u_name } = req.body;
        const result = await Cart.updateOne({ p_id, u_name }, { $inc: { qty: 1 } });
        if (result.matchedCount != 0) {
            console.log(`Cart data for ${u_name} updated`);
            res.json({ 'cartUpdate': 'success' });
        } else {
            console.log('Record not updated');
            res.json({ 'cartUpdate': 'Record Not found' });
        }
    } catch (err) {
        console.log('Error in updating cart: ', err);
        res.json({ 'cartUpdate': 'Error ' + err });
    }
};

// Fetch all cart data
const fetch_cart = async (req, res) => {
    try {
        const cartItems = await Cart.find();
        console.log('Cart response sent');
        res.json(cartItems);
    } catch (err) {
        console.log('Error in fetching cart: ', err);
        res.json({ 'fetchCart': 'Error ' + err });
    }
};

// Delete product from cart
const delete_cart = async (req, res) => {
    try {
        const { p_id, u_name } = req.body;
        const result = await Cart.deleteOne({ p_id, u_name });
        if (result.deletedCount != 0) {
            console.log(`Cart data for ${u_name} deleted`);
            res.json({ 'cartDelete': 'success' });
        } else {
            console.log('Record not deleted');
            res.json({ 'cartDelete': 'Record Not found' });
        }
    } catch (err) {
        console.log('Error in deleting cart item: ', err);
        res.json({ 'cartDelete': 'Error ' + err });
    }
};

module.exports = {
    insert_cart,
    update_cart,
    fetch_cart,
    delete_cart
};
