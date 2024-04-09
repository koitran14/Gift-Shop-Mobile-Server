const {getAll} = require('../controllers/productHas')

module.exports = function(app) {
    app.get('/productHas', getAll);
}