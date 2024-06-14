// server.js
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const url = require('./url');
const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors());

mongoose.connect(url, { dbName: "miniprj", useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connection Success');
    })
    .catch((errRes) => {
        console.log("Connection failed: ", errRes);
    });

const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const cartRoutes = require('./routes/cartRoutes');
const loginRoutes = require('./login/login');

app.use("/", productRoutes);
app.use("/", userRoutes);
app.use("/", cartRoutes);
app.use("/", loginRoutes);

const port = 8080;
app.listen(port, () => {
    console.log('Server listening on port: ', port);
});
