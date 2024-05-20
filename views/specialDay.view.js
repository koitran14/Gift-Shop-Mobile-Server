const {getAll, create} = require('../controllers/specialDay')

module.exports = function(app) {
    app.get('/specialDay', getAll);
    app.post('/specialDay', create);
}