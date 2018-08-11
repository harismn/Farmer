
const { response } = require('../helpers/index');
const{ users: User} = require('../models/index');
const axios = require('axios');
const config = require('../config/config');
const jwtS = require('../config/configJwt')
const jwt = require('jsonwebtoken')
const Sequelize = require('sequelize');
const { Op } = Sequelize;

const jwtSignUser = (user) => {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, jwtS.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}
console.log('===================>' + jwtSignUser)


// const list = {
//     find: async (req, res) => {
//         try {
//             const user = await User.all();
//             return res
//             .status(200)
//             .json(response(true, 'User retrieved successfully', user, null));
//         } catch (error) {
//             if (error.errors) {
//                 return res.status(400).json(response(false, error.errors));
//             }
//             return res.status(400).json(response(false, error.message));
//         }
//     },
// }
module.exports = {
    async register (req, res) {
        // console.log('================>' + req.body)
        try{
            const user = await User.create(req.body)
            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token : jwtSignUser(userJson)
            })
        } 
        catch (err){
        res.status(400).send({
            error:err
            
        })
console.log(err)
    }
},
}
