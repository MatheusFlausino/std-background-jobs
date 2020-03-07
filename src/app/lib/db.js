const environment = process.env.NODE_ENV || 'development'
const config = require('../../config/knexfile')[environment]

const connection = require('knex')(config)

module.exports = {
  connection
}
