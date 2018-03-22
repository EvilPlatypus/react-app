var express = require('express');
var router = express.Router();

//  res.render('index', { title: 'Express' });

/* GET home page. */
router.get('/', function(req, res, next) {
	res.redirect('/catalog');
});

module.exports = router;
