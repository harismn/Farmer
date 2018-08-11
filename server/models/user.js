'use strict';
const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require("bcrypt-nodejs"))

function hashPassword(user, options) {
  const SALT_FACTOR = 8

  if (!user.changed("password")) {
    return
  }

  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashSync(user.password, salt, null))
    .then(hash => {
      user.setDataValue('password', hash)
    })
}
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique : true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {  
  hooks :{
    beforeCreate: hashPassword,
    beforeUpdate: hashPassword,
    beforeSave:hashPassword
  }
  });

  User.prototype.comparePassword = function(password){
    return bcrypt.compareSync(password, this.password)
  }

  User.associate = (models) => {
    // User.hasOne(models.access_tokens, {
    //   foreignKey: 'user_id',
    //   onDelete: 'CASCADE'
    // });
    User.hasMany(models.authors, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE'
    });
  };

  return User;
};