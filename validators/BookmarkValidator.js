const { ErrorHandler } = require('../helpers');

class BookmarkValidator {
  static validate(req, res, next) {
    const { link } = req.body;

    if (!link) {
      return next(new ErrorHandler('Sorry, a link is required', 401));
    }

    //TODO: verify link: check for includes of http: || www.
    next();
  }
}

module.exports = BookmarkValidator;
