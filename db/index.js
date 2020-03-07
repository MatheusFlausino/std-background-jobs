'use strict'
require('dotenv').config()
const { connection } = require('../src/app/lib/db')


connection.migrate.latest()
  .then(function() {
    // return knex.seed.run();
    return true;
  })
  .then(function() {
    // migrations are finished
    console.log('FINISH MIGRATION');
    return true;
  })
  .catch(function(err){
    console.error('ERROR MIGRATE', err)
  })
  .finally(function(){
    return;
  });
