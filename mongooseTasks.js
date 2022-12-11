var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test1')
var Milana = require("./models/milana").Milana


var milana = new Milana({
title: "LP",
nick: "атпути не путю"
})


console.log(milana)
milana.save(function(err, milana, affected){
    console.log(milana.title)

})

