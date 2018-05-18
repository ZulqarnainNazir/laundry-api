const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('Admin');

module.exports = (app) => {
  app.use('/api', router);
};


/**
 * @api {Post} api/admin_login Request to login Admin
 * @apiName Admin Login
 * @apiGroup Admin
 *
 * @apiParam {String} name User name.
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



router.post('/admin_login', function(req, res, next) {
	User.find(function(err, user) {
	  if (err)
	  res.send({status: false, message: "db error"});

	  else if (user.count < 1) {
	  	newUser = new User();
		newUser.name    = "admin";
		newUser.password = "admin";
		newUser.save();
	  }
	});

	User.findOne({ name:  req.body.name, password: req.body.password }, function(err, user) {
	  if (err)
	  res.send({status: false, message: "db error"});

	  else if (!user)
	  res.send({status: false, message: "No account found."});

	  else
		  res.send({status: true, message: "Successfully Login." , user: user});
	});

});