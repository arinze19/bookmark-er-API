const { AuthCtrl } = require('../controllers');

class AuthRoutes {
  static route(router) {
    router.route('/sign-up').post(AuthCtrl.signUp);
    router.route('/sign-in').post(AuthCtrl.signIn);
  }
}

module.exports = AuthRoutes;
