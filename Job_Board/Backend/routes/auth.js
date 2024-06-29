const express = require('express');
const router = express.Router();
const { signupJobSeeker, loginJobSeeker, signupEmployer, loginEmployer } = require('../controllers/authController');

router.post('/jobseeker/signup', signupJobSeeker);
router.post('/jobseeker/login', loginJobSeeker);

router.post('/employer/signup', signupEmployer);
router.post('/employer/login', loginEmployer);

module.exports = router;
