const { BookmarkCtrl } = require('../controllers');

class BookmarkRoutes {
  static route(router) {
    router
      .route('/bookmark')
      .post(BookmarkCtrl.create)
      .get(BookmarkCtrl.retrieve);
  }
}

module.exports = BookmarkRoutes;
