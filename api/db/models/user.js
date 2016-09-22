module.exports = (sequelize, DataTypes) => {
  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    lastname: {
      type: DataTypes.STRING
    },
    firstname: {
      type: DataTypes.STRING
    },
    middlename: {
      type: DataTypes.STRING
    },
    company: {
      type: DataTypes.STRING
    },
    info: {
      type: DataTypes.TEXT
    },
    job: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    userGroup: {
      type: DataTypes.INTEGER
    },
    forgotPasswordCode: {
      type: DataTypes.STRING
    },
    visible: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    }
  }
  const options = {
  }

  return sequelize.define('user', attributes, options)
}
