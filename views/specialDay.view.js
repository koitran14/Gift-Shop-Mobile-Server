const {getAll} = require('../controllers/specialDay')

module.exports = function(app) {
    app.get('/specialDay', getAll);
}