const {getAll} = require('../controllers/select')

module.exports = function(app) {
    app.get('/select', getAll);
}