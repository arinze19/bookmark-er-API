const { ErrorHandler, StringHelper } = require('../helpers');
const { isEmail } = StringHelper;

class AuthValidator {
  static validateSignUp(req, res, next) {
    const { name, email, password } = req.body;

    if (!name) {
      return next(new ErrorHandler('Sorry, a name is required', 401));
    } else if (!email) {
      return next(new ErrorHandler('Sorry, an email is required', 401));
    } else if(!isEmail(email)) {
      return next(new ErrorHandler('Please, provide a valid email - (HINT: at least 6 characters long)'))
    } else if (!password) {
      return next(new ErrorHandler('Sorry, a password is required', 401));
    }

    next();
  }

  static validateSignIn(req, res, next) {
    const { password, email } = req.body;

    if (!password) {
      return next(new ErrorHandler('Sorry, a Password is required', 401));
    } else if (!email) {
      return next(new ErrorHandler('Sorry, an Email is required', 401));
    }

    next();
  }
}

module.exports = AuthValidator;
