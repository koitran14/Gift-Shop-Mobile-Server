const {getAll} = require('../controllers/store')

module.exports = function(app) {
    app.get('/store', getAll);
}