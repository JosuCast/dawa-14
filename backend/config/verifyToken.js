const jwt = require('jsonwebtoken');
const config = require('../config/global');

function verifyToken(req, res, next){
    const token = req.headers['access-token'];
    if(!token){
        return res.status(401).json({
            auth: false,
            message: 'No token provided'
        });
    }

    const decoded = jwt.verify(token, config.secret);

    req.userId = decoded.id;
    next();

}

module.exports = verifyToken;