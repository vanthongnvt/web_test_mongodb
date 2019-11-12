var express = require('express');
var router = express.Router();
var bcrypt   = require('bcrypt-nodejs');
var userModel=require('../models/user');
var mongoose=require('mongoose');
router.get('/', function(req, res, next) {
	res.send('respond with a resource');
});

router.get('/create-users',function(req,res,next){

	var arr = [{
		username: 'Nameef',
		email:'myemail@gmail.com',
		password: bcrypt.hashSync('123456', bcrypt.genSaltSync(8), null),
	},{
		username: 'gwaeg',
		email:'myemail@gmail.com',
		password: bcrypt.hashSync('123456', bcrypt.genSaltSync(8), null),
	},{
		username: 'weaner',
		email:'myemail@gmail.com',
		password: bcrypt.hashSync('123456', bcrypt.genSaltSync(8), null),
	},{
		username: 'dinker',
		email:'myemail@gmail.com',
		password: bcrypt.hashSync('123456', bcrypt.genSaltSync(8), null),
	},{
		username: 'poppee',
		email:'myemail@gmail.com',
		password: bcrypt.hashSync('123456', bcrypt.genSaltSync(8), null),
	}];

	userModel.insertMany(arr, function(error, docs) {
		if(error){
			console.log(error);
			return res.send('503');
		}
		else{
			return res.send('200 OK');
		}
		
	});
})

module.exports = router;
