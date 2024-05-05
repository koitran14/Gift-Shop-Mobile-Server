const { getAll, userLogin, userRegister, checkUserExist } = require("../controllers/user")

//CÁCH TẠO REST API để fetch
module.exports = function(app) {
    //GET
    app.get('/user', getAll);

    //LOGIN
    app.post('/api/login', userLogin);

    //REGISTER
    app.post('/api/register', userRegister);
    app.get('/user-exist', checkUserExist);
}