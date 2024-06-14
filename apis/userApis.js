// Import user model
const User = require('../model/User');

// Get all users
const users_all = async (req, res) => {
    try {
        const users = await User.find();
        console.log('Data sent');
        res.json(users);
    } catch (error) {
        console.log('Fetch error:', error);
        res.status(500).json({ 'message': error });
    }
};

const insert_user = async (req, res) => {
    try {
        const obj = req.body;
        const newuser = new User(obj);
        await newuser.save();
        console.log("Data inserted");
        res.json({ 'insert': 'success' });
    } catch (err) {
        console.log('Error in insertion: ', err);
        res.json({ 'insert': 'Error ' + err });
    }
};
//update user
const update_user= async (req, res) => {
    try {
        const u_serid = req.body.u_serid;
        const obj = {
            u_name: req.body.u_name,
            u_pwd: req.body.u_pwd,
            u_u_email: req.body.u_u_email,
            u_addr: req.body.u_addr,
            u_contact: req.body.u_contact
        };
        const result = await User.updateOne({ u_serid }, { $set: obj });
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

// Delete user
const delete_user = async (req, res) => {
    const { u_serid } = req.params;
    try {
        const deletedUser = await User.findByIdAndDelete(u_serid);
        if (deletedUser) {
            console.log('User deleted');
            res.send({ 'delete': 'success' });
        } else {
            console.log('User not found');
            res.send({ 'delete': 'Record not found' });
        }
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = {
    users_all,
    insert_user,
    update_user,
    delete_user
};