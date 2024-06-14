// Import db schema
const Product = require('../model/Product');

// Get all products
const products_all = async (req, res) => {
    try {
        const products = await Product.find();
        console.log('Data sent');
        res.json(products);
    } catch (error) {
        console.log('Fetch error: ', error);
        res.json({ 'message': error });
    }
};

// Insert a new product
const insert_product = async (req, res) => {
    try {
        const obj = req.body;
        const newProduct = new Product(obj);
        await newProduct.save();
        console.log("Data inserted");
        res.json({ 'insert': 'success' });
    } catch (err) {
        console.log('Error in insertion: ', err);
        res.json({ 'insert': 'Error ' + err });
    }
};

// Update an existing product
const update_product = async (req, res) => {
    try {
        const p_id = req.body.p_id;
        const obj = {
            p_name: req.body.p_name,
            p_cost: req.body.p_cost,
            p_cat: req.body.p_cat,
            p_img: req.body.p_img,
            p_desc: req.body.p_desc
        };
        const result = await Product.updateOne({ p_id }, { $set: obj });
        if (result.matchedCount != 0) {
            console.log("Data updated");
            res.json({ 'update': 'success' });
        } else {
            console.log("Data not updated");
            res.json({ 'update': 'Record not found' });
        }
    } catch (err) {
        console.log('Error in updating: ', err);
        res.json({ 'update': 'Error ' + err });
    }
}
const delete_product = async (req, res) => {
    try {
        const p_id = req.body.p_id;
        const result = await Product.deleteOne({ p_id });
        if (result.deletedCount != 0) {
            console.log("Data deleted");
            res.json({ 'delete': 'success' });
        } else {
            console.log("Data not deleted");
            res.json({ 'delete': 'Record not found' });
        }
    } catch (err) {
        console.log('Error in deletion: ', err);
        res.json({ 'delete': 'Error ' + err });
    }
};

module.exports = {
    products_all,
    insert_product,
    update_product,
    delete_product
};
