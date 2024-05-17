const jwt = require('jsonwebtoken')

exports.generateAccessToken = (idUser) => jwt.sign({ id: idUser }, process.env.JWT_SECRET, { expiresIn: '1h' })
exports.generateRefreshToken = (idUser) => jwt.sign({ id: idUser }, process.env.JWT_SECRET, { expiresIn: '10d' })