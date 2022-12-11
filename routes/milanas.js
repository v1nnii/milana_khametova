var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('milanas тиктоки');
});

module.exports = router;
/* Страница плейлист */
router.get("/:nick", function(req, res, next) {
    res.send(req.params.nick);
});
