const express = require('express')
const articlesController = require('../controllers/article.controller');
const router = express.Router();
const isAuth = require('../config/isAuthentication')

router.route('/').get(isAuth, articlesController.index);
router.route('/:id').get(articlesController.show);
router.route('/create').post(articlesController.post);
router.route('/update/:id').post(articlesController.put);
// module.exports = (app) => {
//   app.get('/api', (req, res) => res.status(200).send({
//     message: 'Welcome to the Todos API!',
//   }));

//   app.post('/', usersController.register);
// };
module.exports = router;