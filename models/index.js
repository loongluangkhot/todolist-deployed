var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

mongoose.Promise = Promise;

module.exports.Todo = require('./todos');