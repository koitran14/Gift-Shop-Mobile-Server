const { getAll, getFavoriteForEachUser, createFavorite } = require('../controllers/favorite')

module.exports = function (app) {
    app.get('/favorite', getAll);
}
module.exports = function (app) {
    app.get('/favorite/user', getFavoriteForEachUser);
}
module.exports = function (app) {
    app.post('/favorite/create', createFavorite);
}

