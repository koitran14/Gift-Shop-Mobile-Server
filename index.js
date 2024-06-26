const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config()

const app = express();
const cors = require("cors");
const port = process.env.SERVER_PORT || 4000;

app.use(cors());
app.use(cookieParser());

//CÁCH CONNECT
mongoose.connect(process.env.DATABASE_URL, {
  dbName: process.env.DATABASE_NAME
}).then(() => {
  console.log('Database connected');
}).catch((error) => {
  console.log('Error connecting to database: ' + error);
});

app.use(bodyParser.json());

//Import the cart routes
const cartRoutes = require('./views/cart.view');
//Use the Cart routes
cartRoutes(app);

//Tạo routes ở đây
require('./views/specialDay.view')(app);
require('./views/user.view')(app);
require('./views/property.view')(app);
require('./views/store.view')(app);
require('./views/voucher.view')(app);
require('./views/product.view')(app);
require('./views/payment.view')(app);
require('./views/order.view')(app);
require('./views/feedback.view')(app);
require('./views/category.view')(app);

app.listen(port, () => {
  console.log(`Server is running at site: http://localhost:${port}`);
});

