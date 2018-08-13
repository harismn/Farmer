'use strict';
module.exports = (sequelize, DataTypes) => {
  var Article = sequelize.define('articles', 
  {

    author_id:
    {     
      allowNull: false,
      foreignKey: true,
      type: DataTypes.INTEGER,
      references:{
        model :'authors',
        key:'id'
      }
    },
    content:{ 
      type: DataTypes.STRING,
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
      foreignKey: 'author_id',
      onDelete: 'CASCADE'
    });
  };
  return Article;
};