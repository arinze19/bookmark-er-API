const { AuthCtrl } = require('../controllers');
const { AuthValidator } = require('../validators');

class AuthRoutes {
  static route(router) {
    /**
     * @route POST /auth/sign-up
     * @group Authentication
     * @param {AuthSignInRequest.model} example.body.required expected values. name, email and password
     * @produces application/json
     * @returns {AuthResponse.model} 200
     */
    router
      .route('/auth/sign-up')
      .post(AuthValidator.validateSignUp, AuthCtrl.signUp);

    /**
     * @route POST /auth/sign-in
     * @group Authentication
     * @param {AuthSignInRequest.model} example.body.required expected values. email and password
     * @produces application/json
     * @returns {AuthResponse.model} 200
     */
    router
      .route('/auth/sign-in')
      .post(AuthValidator.validateSignIn, AuthCtrl.signIn);
  }
}

module.exports = AuthRoutes;
