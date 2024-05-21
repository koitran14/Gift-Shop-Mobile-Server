const { getAll, getFavoriteForEachUser, createFavorite } = require('../controllers/favorite')

module.exports = function (app) {
    app.get('/favorite', getAll);
    app.get('/favorite/user', getFavoriteForEachUser);
    app.post('/favorite/create', createFavorite);
}


