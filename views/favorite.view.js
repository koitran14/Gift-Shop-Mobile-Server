const {getAll} = require('../controllers/favorite')

module.exports = function(app) {
    app.get('/favorite', getAll);
}