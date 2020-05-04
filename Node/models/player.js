const mongoose = require('mongoose');

var Player = mongoose.model('player',{
    name:{type:String},
    joiningDate:{type:String},
    birthDate:{type:String},
    score:{type:String},
    matches:{type:String},
    centuries:{type:String},
    fifties:{type:String},
    totalruns:{type:String}
});
module.exports = {Player} ;