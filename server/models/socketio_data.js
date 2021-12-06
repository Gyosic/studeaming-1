"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class socketio_data extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  socketio_data.init(
    {
      uuid: DataTypes.STRING,
      title: DataTypes.STRING,
      user_id: DataTypes.STRING,
      headCount: DataTypes.INTEGER,
      thumbnail: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "socketio_data",
    }
  );
  return socketio_data;
};
