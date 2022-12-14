var express = require('express');
var router = express.Router();
var Milana = require("../models/milana").Milana

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с milanas');
});


/* Страница песенок */
router.get('/:nick', function(req, res, next) {
    Milana.findOne({nick:req.params.nick}, function(err,milana){
        if(err) return next(err)
        if(!milana) return next(new Error("Нет такой песенки"))
        res.render('milana', {
            title: milana.title,
            picture: milana.avatar,
            desc: milana.desc
        })
    })
})

module.exports = router;
