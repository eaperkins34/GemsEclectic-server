'use strict';
module.exports = (sequelize, DataTypes) => {
  const Jewelry = sequelize.define('Jewelry', {
    name: {
      type: DataTypes.STRING,
      allowNull:false
    },
    description: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    available: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
  }, {});
  Jewelry.associate = function(models) {
    // associations can be defined here
  };
  return Jewelry;
};