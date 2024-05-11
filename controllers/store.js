const Store = require('../models/store.model')

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
    const storeName = req.params;
    try {
        //Kiểm tra xem có tồn tại storeName không
        const store = await Store.findOne( storeName );

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
    const storeName = req.params;
    try {
        //Kiểm tra xem có tồn tại storeName không
        const store = await Store.findOne( storeName );

        if (!store) {
            return res.status(404).json({ error: "Store not found" });
        }

        const categories = {};
        //duyệt từng product trong store
        store.products.forEach(product => {
            const category = product.category;
            // Nếu loại product chưa tồn tại trong categories, thêm vào và gán số lượng là 1
            if (!categories[category]) {
                categories[category] = 1;
            } else {
                // Nếu loại product đã tồn tại trong categories, tăng số lượng lên 1
                categories[category]++;
            }
        });

        //Xuất các categories có trong store
        return res.status(200).json(store.categories);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
