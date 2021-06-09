const { AuthCtrl } = require('../controllers');

class AuthRoutes {
  static route(router) {
    router.route('/sign-up').post(AuthCtrl.signUp);
    router.route('/sign-in').post(AuthCtrl.signIn);
    router.route('/stuff').get((req, res)  => res.send({ data: req.headers }));
  }
}

module.exports = AuthRoutes;
