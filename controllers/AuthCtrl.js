const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { User } = require('../models');
const config = require('../config');
const { ErrorHandler, OutputFormatter } = require('../helpers');

class AuthCtrl {
  static generateToken(user) {
    return jwt.sign(
      {
        id: user._id,
        email: user.email
      },
      config.secret
    );
  }

  static async signUp(req, res, next) {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });

    if (user) {
      return next(new ErrorHandler('user already exists', 409));
    }

    user = new User({ name, email, password });
    await user.save();

    res.status(201).send({
      data: {
        token: AuthCtrl.generateToken(user),
        user: OutputFormatter.formatUser(user)
      }
    });
  }

  static async signIn(req, res) {
    const { email, password } = req.body;

    let user = User.findOne({ email });

    if (!(await bcrypt.compare(password, user.password))) {
      return new ErrorHandler('worng password', 403);
    }

    res.status(200).send({
      data: {
        token: AuthCtrl.generateToken(user),
        user: OutputFormatter.formatUser(user)
      }
    });
  }
}

module.exports = AuthCtrl;
