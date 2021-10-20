const { BookmarkCtrl } = require('../controllers');
const { AuthMiddleware } = require('../middleware');
const { BookmarkValidator } = require('../validators');

class BookmarkRoutes {
  static route(router) {
    /**
     * @route POST /bookmarks
     * @group Bookmark
     * @param {BookmarkRequest.model} example.body.required expected values - link, optional values - category
     * @produces application/json
     * @returns {BookmarkResponse.model} 200
     */
    /**
     * @route GET /bookmarks
     * @group Bookmark
     * @produces application/json
     * @returns {BookmarkResponse.model} 200
     */
    /**
     * @route PUT /bookmarks
     * @group Bookmark
     * @param {BookmarkRequest.model} example.body.required expected values - link, optional values - category
     * @produces application/json
     * @returns {BookmarkResponse.model} 200
     */
    router
      .route('/bookmarks')
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
