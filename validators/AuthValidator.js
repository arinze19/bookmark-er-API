const { ErrorHandler } = require('../helpers');

class AuthValidator {
  static validate(req, res, next) {
    const { name, email, password } = req.body;

    if (!name) {
      return next(new ErrorHandler('Sorry, a name is required', 401));
    } else if (!email) {
      return next(new ErrorHandler('Sorry, an email is required', 401));
    } else if (!password) {
      return next(new ErrorHandler('Sorry, a password is required', 401));
    }

    next();
  }
}

module.exports = AuthValidator;
