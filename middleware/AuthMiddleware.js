const { ErrorHandler } = require('../helpers');
const config = require('../config');

class AuthMiddleware {
  static isAuthenticated(req, res, next) {
    const token = req.headers['x-access-token'] || req.headers['authorization'];

    if (!token) {
      return next(new ErrorHandler('Access denied. Token is required.', 401));
    }

    const indexOfBearer = token.indexOf('Bearer');
    const parsedToken = indexOfBearer === -1 ? token : token.substr(7, token.length);

    try {
      const decoded = jwt.verify(parsedToken, config.secret);

      if (!decoded) {
        return next(
          new ErrorHandler('Access denied. A valid token is required', 401)
        );
      }

      next();
    } catch (err) {
      return next(new ErrorHandler(err, 500));
    }
  }
}

module.exports = AuthMiddleware;
