const {getAll} = require('../controllers/following')

module.exports = function(app) {
    app.get('/following', getAll);
}