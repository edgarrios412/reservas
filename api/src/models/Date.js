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
      defaultValue:"https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
    },
  },{timestamps:false});
};
