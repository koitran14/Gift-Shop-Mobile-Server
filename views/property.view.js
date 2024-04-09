const {getAll} = require('../controllers/property')

module.exports = function(app) {
    app.get('/property', getAll);
}