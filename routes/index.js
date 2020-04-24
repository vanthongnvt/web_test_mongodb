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
  		return res.render('index', {users:users});
	})
});

router.post('/create-user',function(req,res,next){

	let user = {};
	if(req.body.username && req.body.email){
		user.username = req.body.username;
		user.email = req.body.email;
	}
	else{
		return res.status(404).send({error:true, message:'invalid params'});
	}

	userModel.create(user, function(error, docs) {
		if(error){
			console.log(error);
			return res.status(503).send({error:true});
		}
		else{
			return res.send({error:false,message:'successfully'});
		}
		
	});
})

module.exports = router;
