const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//import model that we use
const User = require('../models/user.model');


// **NOTE: các hàm khác có thể sử dụng bình thường, nhưng riêng insert/insertOne/insertMany thì nó sẽ được dùng cho collection,
// không phải schema nên mn sử dụng create thay vì insertOne() nhe.

exports.getAll = async (req, res) => {
    try {
        const users = await User.find(); // --> cách gọi method của mongoose lên thằng model mình muốn thao tác.
        return res.status(200).json(users); //res should be used to return with json and status
    } catch (error) {
        return res.status(500).json({ error: error.message }) // --> trả về ngắn gọn, bằng res và status như thường lệ, bỏ vào trong json để dễ test trên postman
    }
}

exports.userRegister = async (req, res) => {
    try {
        const user = req.body;
        if (!user.username || !user.password || !user.email) {
            console.log("Cannot get the user")
            return res.json({
                message: "Username and password are required",
                status: false,
            })
        }
        const salt = bcrypt.genSaltSync(10)
        const passwordHash = await bcrypt.hash(user?.password, salt);
        let userObject = {
            username: user.username,
            email: user.email,
            password: passwordHash
        }

        let savedUser = await User.create(userObject);

        //acknowledgement no need
        if (savedUser?._id) {
            let token = jwt.sign({ id: savedUser?._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            return res.json({
                message: "Register successfully.",
                status: true,
                data: token
            })
        } else return res.json({
            message: "User registration failed",
            status: false
        })

    } catch (error) {

        console.log(error);

        let message = "User registration failed";
        (error?.code === 11000 && error?.keyPattern?.username) ? message = "Username already exists" : null;
        (error?.code === 11000 && error?.keyPattern?.email) ? message = "Email already exists" : null;

        return res.json({
            status: false,
            message: message,
            error: error.message
        })
    }
}

exports.userLogin = async (req, res) => {
    try {
        const user = req.body;

        if (!user?.username || !user?.password) {
            return {
                status: false,
                message: "Username and password are required"
            }
        }

        let userObject = {
            username: user?.username
        }

        let savedUser = await User.findOne(userObject);

        if (savedUser) {
            let match = await bcrypt.compare(user?.password, savedUser?.password);
            if (match) {
                let token = jwt.sign({ id: savedUser?._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
                return res.json({
                    status: true,
                    message: "User logged in successfully",
                    data: token
                })
            } else {
                return res.json({
                    status: false,
                    message: "Invalid username or password"
                })
            }
        } else {
            return res.json({
                status: false,
                message: "Invalid username or password"
            })
        }
    } catch (error) {
        console.log(error);
        return res.json({
            status: false,
            message: "User login failed",
            error: error?.toString()
        })
    }
}

exports.checkUserExist = async (req, res) => {
    let query = req.query;
    let messages = {
        email: "This email already exists",
        username: "This username is taken"
    };
    try {
        let queryType = Object.keys(query)[0];
        let userObject = await User.findOne(query);
        return !userObject
            ? res.json({ status: true, message: `This ${queryType} is not taken` })
            : res.json({ status: false, message: messages[queryType] });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}