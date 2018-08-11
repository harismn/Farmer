const { response } = require('../helpers/index');
const { users: User } = require('../models/index');
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
    async register(req, res) {
        try {
            const user = await User.create(req.body)
            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
        }
        catch (err) {
            res.status(400).send({
                error: err

            })
            console.log(err)
        }
    },

    async login(req, res) {
        console.log(req.body)
        try {
            const { email, password } = req.body
            const user = await User.findOne({
                where: {
                    email: email
                }
            })

            if (!user) {
                return res.status(403).send({
                    error: 'The login information was incorrect'
                })
            }
            const isPasswordValid = await user.comparePassword(password)
            if (!isPasswordValid) {
                console.log(isPasswordValid)
                return res.status(403).send({
                    error: 'The login information was incorrect'
                })
            }

            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to log in'
            })
        }

        } 
}