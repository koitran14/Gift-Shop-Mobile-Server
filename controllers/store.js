const Store = require('../models/store.model')
const Category = require('../models/category.model')

exports.getAll = async (req, res) => {
    try {
        const store = await Store.find();
        return res.status(200).json(store);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

exports.addStore = async (req, res) => {
    try {
        const store = await Store.create(req.body);
        return res.status(200).json(store);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

exports.getProduct = async (req, res) => {
    try {
        const storeData = req.query.storeName;
        if (!storeData) {
            return res.json({
                message: "Unfilled data.",
                status: false,
            })
        }
        //Kiểm tra xem có tồn tại storeName không
        const store = await Store.findOne( {storeName: storeData} );

        if (!store) {
            return res.status(404).json({ error: "Store not found" });
        }
        //Xuất các product có trong cửa hàng
        return res.status(200).json(store.products);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

exports.getCategories = async (req, res) => {
    try {
        const storeData = req.query.storeName;
        if (!storeData) {
            return res.json({
                message: "Unfilled data.",
                status: false,
            })
        }
        //Kiểm tra xem có tồn tại storeName không
        const store = await Store.findOne( {storeName: storeData} );
        if (!store) {
            return res.status(404).json({ error: "Store not found" });
        }

        const categories = [];
        //duyệt từng product trong store
        store.products.forEach(product => {
            const category = product.category;
            // Nếu loại product chưa tồn tại trong categories, thêm vào và gán số lượng là 1
            if (!categories[category]) {
                var object ={
                    categoryName: product.category.categoryName,
                    quantity:1
                }
                categories.push(object);
                //categories[category] = 1;
            } else {
                // Nếu loại product đã tồn tại trong categories, tăng số lượng lên 1
                //categories[category]++;
                categories[category].quantity++;
            }
        });

        //Xuất các categories có trong store
        return res.status(200).json(categories);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

exports.getProductByCategory = async (req, res) => {
    try {
        const storeData = req.query.storeName;
        const categoryData = req.query.categoryName;
        if (!storeData || !categoryData) {
            return res.json({
                message: "Unfilled data.",
                status: false,
            })
        }
        //Kiểm tra xem có tồn tại storeName không
        const store = await Store.findOne( {storeName: storeData} );
        if (!store) {
            return res.status(404).json({ error: "Store not found" });
        }

        // //Kiểm tra xem store có tồn tại category yêu cầu không
        var categoryExists = false;
        store.products.forEach(product => {
            if (product.category.categoryName === categoryData) {
                categoryExists = true;
            }
        });
        
        if (!categoryExists){
            return res.status(404).json({ error: "Category not found in store products" });
        }
        //Mảng chứa các product thuộc requested category
        let productsInCategory = [];

        //Duỵêt từng product trong store
        store.products.forEach(product => {
            // Kiểm tra xem product thuộc category mong muốn không
            if (product.category.categoryName === categoryData) {
                productsInCategory.push(product);
            }
        });

        // Kiểm tra xem có product trong danh mục không
        if (productsInCategory.length === 0) {
            return res.status(404).json({ error: "No products found in this category" });
        }
        //Xuất các product
        return res.status(200).json(productsInCategory);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}