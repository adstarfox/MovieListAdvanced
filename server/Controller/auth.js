const SECRET = process.env.SECRET
const jwt = require('jsonwebtoken')

const generateToken = (info) => {
    return jwt.sign(
        {
            username: info.username,
            password: info.password
        },
        SECRET,
        {
            expiresIn: '24h'
        }
    )
}

module.exports = {
    createToken: async (data) => {
        let token = generateToken(data)
        console.log('token:', token)
        return token
    },
    validateToken: async (req, res) => {
        let token = req.get('Authorization')
        let valid = jwt.verify(token, SECRET)
        valid ? res.status(200).send('Token found') : res.status(401).send('LOL invalid token')
    }
}