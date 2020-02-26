/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
const { pick } = require('lodash');
const debug = require('debug')('app:controllers:auth');
// const bcrypt = require('bcrypt');
const userService = require('../services/users');
const jwt = require('../services/jwt');


// const saltRounds = 10;
// const myPlaintextPassword = 's0/\/\P4$$w0rD';
// const someOtherPlaintextPassword = 'not_bacon';

const login = async (req, res) => {
  const { body: { username, password } } = req;

  return userService.getUser(username) // check for password returning from user and compare with one user submits
    .then((user) => {
      // bcrypt.genSalt(saltRounds, (err, salt) => {
      // bcrypt.hash(password, salt, (err, hash) => {
      if (user.password === password) {
        const userDetails = pick(user, ['name', 'username']);
        const authToken = jwt.createToken({ username });
        res
          .cookie('session', authToken)
          .status(200)
          .json(userDetails);
      } else {
        res.sendStatus(403); // user not found
      }
      // });
      // });
    })
    .catch((err) => {
      // console.log(err);
      res.sendStatus(401);
    });
};

module.exports = {
  login,
};
