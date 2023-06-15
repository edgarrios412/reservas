const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('service', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },{timestamps:false});
};