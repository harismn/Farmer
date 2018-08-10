const path = require('path')
module.exports = {
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'rahasia'
    }

}