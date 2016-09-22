'use strict';
var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var excludeFiles = ['index.js'];
var config = require('../config');
var logger = require('../config/logger');

var Sequelize = require('sequelize');

console.info('db',
    config.db.name,
    config.db.username,
    config.db.password, {
        host: config.db.host,
        port: config.db.port,
        logging: (['test1', 'development'].indexOf(config.env) !== -1) ?
            false : logger.db_log,
        dialect: config.db.dialect,
        pool: {
            max: 200
        }
    }
);

var sequelize = new Sequelize(
    config.db.name,
    config.db.username,
    config.db.password, {
        host: config.db.host,
        port: config.db.port,
        logging: (['test1', 'developme1nt'].indexOf(config.env) !== -1) ?
            false : logger.db_log,
        dialect: config.db.dialect,
        pool: {
            max: 200
        }
    }
);

var db = {};

var indexOf = [].indexOf || function(item) {
    for (var i = 0, l = this.length; i < l; i++) {
        if (i in this && this[i] === item) {
            return i;
        }
    }
    return -1;
};

fs.readdirSync(__dirname).filter(function(file) {
    return (file.indexOf('.') !== 0) &&
        (indexOf.call(excludeFiles, file) < 0) &&
        (file.slice(-3) === ".js");
}).forEach(function(file) {
    var model;
    model = sequelize["import"](path.join(__dirname, file));
    logger.trace("| Update db model: " + model.name);
    db[model.name] = model;
    return model;
});

Object.keys(db).forEach(function(modelName) {
    if (db[modelName].options.hasOwnProperty('associate')) {
        return db[modelName].options.associate(db);
    }
});

sequelize.sync().then(function() {
    logger.trace('sync tables finished');
});


export default _.extend({
    sequelize: sequelize,
    Sequelize: Sequelize,
    models: db
});
