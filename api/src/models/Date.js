const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('date', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    end: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    start:{
      type: DataTypes.STRING,
    },
  },{timestamps:false});
};
