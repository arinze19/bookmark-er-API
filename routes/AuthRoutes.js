const { AuthCtrl } = require('../controllers');
const { AuthValidator } = require('../validators');

class AuthRoutes {
  static route(router) {
    router.route('/sign-up').post(AuthValidator.validateSignUp, AuthCtrl.signUp);
    router.route('/sign-in').post(AuthValidator.validateSignIn, AuthCtrl.signIn);
  }
}

module.exports = AuthRoutes;
