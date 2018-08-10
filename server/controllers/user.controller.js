
const { response} = require('../helpers/index');
const { users: User} = require('../models/index');
const axios = require('axios');
// const config = require('config');
const Sequelize = require('sequelize');
const { Op } = Sequelize;


console.log(User)
console.log("hahahhaha")
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
const register = async (req, res) => {
 

    if (req.body.password ===req.body.password) {
      try {
        const user = await User.create({
          email: req.body.email,
          password:req.body.password,
        });
        const token = authService().issue({ id: user.id });

        return res.status(200).json({ token, user });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }
    }

    return res.status(400).json({ msg: 'Bad Request: Passwords don\'t match' });
};

module.exports ={
    register
} 
