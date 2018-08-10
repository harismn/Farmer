'use strict';
module.exports = (sequelize, DataTypes) => {
  var Author = sequelize.define('authors',
    {
  
      user_id:
        {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
          references:{
            model :'users',
            key:'id'
          }
        },
      role: {
        allowNull: true,
        type: DataTypes.INTEGER
      },
    }, {});
  Author.associate = function (models) {
    // associations can be defined here
    // associations can be defined here
    Author.belongsTo(models.users, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE'
    });
  };
  return Author;
};