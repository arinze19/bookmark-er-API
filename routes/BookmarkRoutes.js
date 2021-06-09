const { BookmarkCtrl } = require('../controllers');
const { AuthMiddleware } = require('../middleware');

class BookmarkRoutes {
  static route(router) {
    router
      .route('/bookmark')
      .post(AuthMiddleware.isAuthenticated, BookmarkCtrl.create)
      .get(AuthMiddleware.isAuthenticated, BookmarkCtrl.retrieve);
  }
}

module.exports = BookmarkRoutes;
