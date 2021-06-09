const AuthRoutes = require('./AuthRoutes');
const BookmarkRoutes = require('./BookmarkRoutes');

class Routes {
  static route(router) {
    AuthRoutes.route(router);
    BookmarkRoutes.route(router);
    
    return router
  }
}

module.exports = Routes;
