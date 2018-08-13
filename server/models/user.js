'use strict';
const Promise = require('bluebird')
// const bcrypt = Promise.promisifyAll(require('bcrypt'))
const bcrypt = require('bcrypt')
// console.log('====================>' + bcrypt);
function hashPassword(user, options) {
  console.log('iki pass', user.password)
  const SALT_FACTOR = 8
  const salt = bcrypt.genSaltSync(SALT_FACTOR)
  const hash = bcrypt.hashSync(user.password, salt, null)
 console.log(bcrypt.compareSync(user.password, hash))
  return user.setDataValue('password', hash)
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
    // beforeSave:hashPassword
  }
  });

  User.prototype.comparePassword = function(password){
    console.log('password', password)

    console.log('password', this.password)
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
    User.hasMany(models.articles, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE'
    });
  };

  return User;
};