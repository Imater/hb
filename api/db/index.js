const fs = require('fs')
const path = require('path')
const _ = require('lodash')
const config = require('../../src/config')
const Sequelize = require('sequelize')

const excludeFiles = ['index.js']

const sequelize = new Sequelize(
  config.db.name,
  config.db.username,
  config.db.password, {
    host: config.db.host,
    port: config.db.port,
    logging: console.info,
    dialect: config.db.dialect,
    pool: {
      max: 200
    }
  }
)

const db = {}

const indexOf = [].indexOf

fs.readdirSync(path.join(__dirname, 'models')).filter(file => (
  (file.indexOf('.') !== 0) &&
    (indexOf.call(excludeFiles, file) < 0) &&
    (file.slice(-3) === '.js')
)).forEach(file => {
  const model = sequelize.import(path.join(__dirname, 'models', file))
  console.log(`| Update db model: ${model.name}`)
  db[model.name] = model
  return model
})

Object.keys(db).forEach(modelName => {
  if (!db[modelName].options.associate) {
    return
  }
  db[modelName].options.associate(db)
})


sequelize.sync().then(() => {
  console.log('sync tables finished')
})


export default _.extend({
  sequelize,
  Sequelize,
  models: db
})
