'use strict'

const Sequelize = require('sequelize')
var db = require('../../db')

const Chunk = db.define('chunks', {
  chunkJson: {
	  type: Sequelize.STRING,
	  allowNull: false
  }
})

module.exports = Chunk;
