var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect("mongodb://loongluangkhot:Nalongsak085620@ds255797.mlab.com:55797/todo-app-loongluangkhot", { useNewUrlParser: true });

mongoose.Promise = Promise;

module.exports.Todo = require('./todos');