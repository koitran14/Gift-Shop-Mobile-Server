const Product = require('../models/product.model');

exports.getAll = async (req, res) => {
    try {
        const products = await Product.find();
        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

exports.addProduct = async (req, res) => {
    try {
        const product = req.body;
        if (!product.productName || !product.productDescription || !product.quantitySold) {
            return res.json({
                message: "Product name, description, and quantity sold are required",
                status: false,
            })
        }

        let productObject = {
            productName: product.productName,
            productDescription: product.productDescription,
            quantitySold: product.quantitySold
        }

        let savedProduct = await Product.create(productObject);

        if (savedProduct?._id) {
            return res.json({
                message: "Product added successfully.",
                status: true,
                data: savedProduct
            })
        } else return res.json({
            message: "Failed to add product",
            status: false
        })

    } catch (error) {
        console.log(error);

        let message = "Failed to add product";
        (error?.code === 11000 && error?.keyPattern?.productName) ? message = "Product name already exists" : null;

        return res.json({
            status: false,
            message: message,
            error: error.message
        })
    }
}