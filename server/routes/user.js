const express = require('express')
const usersController = require('../controllers/user.controller');
const router = express.Router();

router.route('/register').post(usersController.register);


// module.exports = (app) => {
//   app.get('/api', (req, res) => res.status(200).send({
//     message: 'Welcome to the Todos API!',
//   }));

//   app.post('/', usersController.register);
// };
module.exports = router;