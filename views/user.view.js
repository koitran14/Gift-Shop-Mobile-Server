const { getAll, userLogin, userRegister, checkUserExist } = require("../controllers/user")

module.exports = function(app) {
    //GET
    app.get('/user', getAll);

    //LOGIN
    app.post('/user/login', userLogin);

    //REGISTER
    app.post('/user/register', userRegister);
    app.get('/user/user-exist', checkUserExist);
}