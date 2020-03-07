'use strict'
require('dotenv').config()
const Queue = require('./app/lib/queue');

Queue.process();
