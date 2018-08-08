const User = require('../models/user');

console.log('connect ==============================================')
module.exports = {
    list(req, res) {
        return user
        console.log(user)
          .all()
          .then(user => res.status(200).send(user))
          .catch(error => res.status(400).send(error));
      },
};