const { getAll, userLogin, userRegister, checkUserExist, getUserCurrent, deleteUser, updateUser } = require("../controllers/user")
// import middleware to check access token
const { verifyAccessToken } = require('../middlewares/verifyToken')
//CÁCH TẠO REST API để fetch

module.exports = function (app) {
    //GET
    app.get('/', getAll);
    app.get('/user', verifyAccessToken, getUserCurrent)


    //LOGIN
    app.post('/api/login', userLogin);

    //REGISTER
    app.post('/api/register', userRegister);
    app.get('/user-exist', checkUserExist);

    //DELETE
    app.delete('/api', verifyAccessToken, deleteUser)

    //UPDATE
    app.patch('/api/update-user', verifyAccessToken, updateUser)

}