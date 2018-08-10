'use strict';
const Sequelize = require('sequelize');
const bcryptService = require('../helpers/bcrypt.service');


const hooks = {
  beforeCreate(user) {
    user.password = bcryptService().password(user); // eslint-disable-line no-param-reassign
  },
};

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },{ hooks});

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