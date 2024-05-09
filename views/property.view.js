const {getAll, create} = require('../controllers/property')

module.exports = function(app) {
    app.get('/property', getAll);
    app.post('/property', create);
}