const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = (app) => {
  app.use('/api', router);
};

/**
 * @api {Post} api/signup Request to signup User
 * @apiName Signup
 * @apiGroup User
 *
 * @apiParam {String} number User Number.
 * @apiParam {String} password User Password.
 * @apiParam {name} name User name.
 *
 *
 * @apiSuccess {Boolean} status True.
 * @apiSuccess {String} message  Response message.
 * @apiSuccess {ID} user Response User Object of login user.
 *
 * @apiError {Boolean} status false.
 * @apiError {String} message  Response message.
 */


router.post('/signup', (req, res, next) => {
  var val = Math.floor(1000 + Math.random() * 9000);
  newUser = new User();
  newUser.number    = req.body.number;
  newUser.password = newUser.generateHash(req.body.password);
  newUser.name = req.body.name;
  newUser.code = val; 	// console.log(val);
  newUser.save(function(err, user) {
    if (err)
      res.send({status: false, message: "Error."});
    else
      res.send({status: true, message: "user created successfully.", user_id: user.id});
  });
});

