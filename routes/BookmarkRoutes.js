const { BookmarkCtrl } = require('../controllers');
const { AuthMiddleware } = require('../middleware');
const { BookmarkValidator } = require('../validators');

class BookmarkRoutes {
  static route(router) {
    router
      .route('/bookmark')
      .post(
        AuthMiddleware.isAuthenticated,
        BookmarkValidator.validate,
        BookmarkCtrl.create
      )
      .get(
        AuthMiddleware.isAuthenticated,
        BookmarkValidator.validate,
        BookmarkCtrl.retrieve
      )
      .put(
        AuthMiddleware.isAuthenticated,
        BookmarkValidator.validate,
        BookmarkCtrl.update
      );
  }
}

module.exports = BookmarkRoutes;
