const {getAll} = require('../controllers/include')

module.exports = function(app) {
    app.get('/include', getAll);
}