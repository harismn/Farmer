const express = require('express')
const articlesController = require('../controllers/article.controller');
const router = express.Router();

router.route('/').get(articlesController.index);
router.route('/create').post(articlesController.post);
// module.exports = (app) => {
//   app.get('/api', (req, res) => res.status(200).send({
//     message: 'Welcome to the Todos API!',
//   }));

//   app.post('/', usersController.register);
// };
module.exports = router;