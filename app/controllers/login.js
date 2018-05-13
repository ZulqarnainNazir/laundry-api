const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = (app) => {
  app.use('/api', router);
};


/**
 * @api {Post} api/login Request to login User
 * @apiName Login
 * @apiGroup User
 *
 * @apiParam {String} number User Number.
 * @apiParam {String} password User Password.
 *
 *
 * @apiSuccess {Boolean} status True.
 * @apiSuccess {String} message  Response message.
 * @apiSuccess {ID} user Response User Object of login user.
 *
 * @apiError {Boolean} status false.
 * @apiError {String} message  Response message.
 */



router.post('/login', function(req, res, next) {
	User.findOne({ number:  req.body.number }, function(err, user) {
	  if (err)
	  res.send({status: false, message: "db error"});

	  else if (!user)
	  res.send({status: false, message: "No account found."});
	  
	  else if (!user.validPassword(req.body.password))
		  res.send({status: false, message: "Number and Password Does Not Match."});
	  else
		  res.send({status: true, message: "Successfully Login." , user: user});
	});
});