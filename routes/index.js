var express = require('express');
var router = express.Router();
const controllerUser = require('../controller/con-user');
const controllerHome = require('../controller/con-home');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send({ message: 'hello' })
});

router.post('/api/signup', controllerUser.registerNewUser)
router.post('/api/login', controllerUser.loginUser)
router.get('/api/users', controllerUser.getUser);



router.get('/home', controllerHome.home);


module.exports = router;

