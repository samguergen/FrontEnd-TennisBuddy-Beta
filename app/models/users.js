var mongoose = require('mongoose');

module.exports = user.model('User', {
    name : {type : String, default: ''}
});