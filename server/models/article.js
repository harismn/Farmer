'use strict';
module.exports = (sequelize, DataTypes) => {
  var Article = sequelize.define('articles', 
  {

    user_id:
    {
      allowNull: false,
      foreignKey: true,
      type: DataTypes.INTEGER,
      references:{
        model :'users',
        key:'id'
      }
    },
    content:{ 
      type: DataTypes.TEXT,
      allowNull: false,
    },
    photo:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {});
  Article.associate = function(models) {
    // associations can be defined here
    Article.belongsTo(models.users, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE'
    });
  };
  return Article;
};