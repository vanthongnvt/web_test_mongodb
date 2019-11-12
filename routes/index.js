var express = require('express');
var router = express.Router();
var userModel=require('../models/user');
var mongoose=require('mongoose');
/* GET home page. */
router.get('/', function(req, res, next) {
	userModel.find({},function(err,users){
		if(err){
			console.log(err);
		}
  		return res.render('index', { title: 'Express' ,users:users});
	})
});

module.exports = router;
