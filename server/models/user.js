'use strict';
// module.exports = (sequelize, DataTypes) => {
//   var user = sequelize.define('user', {
//     full_name: DataTypes.STRING,
//     email: DataTypes.STRING,
//     password: DataTypes.STRING,
//     phone: DataTypes.STRING,
//     hash: DataTypes.STRING
//   }, {});
//   user.associate = function(models) {
//     // associations can be defined here
//   };
//   return user;
// };
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
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
  });

  user.associate = (models) => {
    // user.hasMany(models.TodoItem, {
    //   foreignKey: 'userId',
    //   as: 'userItems',
    // });
  };

  return user;
};