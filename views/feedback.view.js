const {getAll} = require('../controllers/feedback')

module.exports = function(app) {
    app.get('/feedbacks', getAll);
}