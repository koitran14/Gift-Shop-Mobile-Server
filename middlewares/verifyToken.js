const jwt = require('jsonwebtoken')

exports.verifyAccessToken = async (req, res, next) => {
    try {
        if (req?.headers?.authorization?.startsWith('Bearer')) {
            const token = req.headers.authorization.split(' ')[1]
            jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
                if (err) {
                    return res.status(401).json({
                        success: false,
                        message: 'Invalid access token'
                    })
                }
                req.user = decode
                next()
            })
        } else {
            return res.status(401).json({
                message: "Require Authentication",
                success: false
            })
        }
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}