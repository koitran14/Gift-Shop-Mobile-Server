const {getAll, create} = require('../controllers/feedback')

module.exports = function(app) {
    app.get('/feedbacks', getAll);
    app.post('/feedbacks', create);
}