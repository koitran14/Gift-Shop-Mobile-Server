const { getAll, userLogin, userRegister, checkUserExist } = require("../controllers/user")

//CÁCH TẠO REST API để fetch
module.exports = function(app) {
    //GET
    app.get('/user', getAll);

    //LOGIN
    app.post('/user/login', userLogin);

    //REGISTER
    app.post('/user/register', userRegister);
    app.get('/user/user-exist', checkUserExist);
}