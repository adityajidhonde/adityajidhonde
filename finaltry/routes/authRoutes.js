const { Router } = require('express');
const authC = require('../controller/authCont');

const router = Router();

router.post('/res', authC.dres);
router.get('/signup', authC.signup_get);
router.post('/signup', authC.signup_post);
router.get('/login', authC.login_get);
router.post('/login', authC.login_post);
router.get('/logout', authC.logout_get);

module.exports = router;