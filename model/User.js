const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    u_serid: Number,
    u_name: String,
    u_pwd: String,
    u_u_email: String,
    u_addr: String,
    u_u_contact: Number,
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User;
