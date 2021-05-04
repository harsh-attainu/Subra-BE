const express = require('express');
const router = express.Router();
const teacher_auth = require('../middleware/teacher_auth')
const student_auth = require('../middleware/student_auth')

//common routes
router.use('/', require('./common/index'));

//student routes
router.use('/student/auth', require('./student/auth'));
router.use('/student/class', student_auth.checkToken, require('./student/class'));

//teachers route
router.use('/teacher/auth', require('./teacher/auth'));
router.use('/teacher/class', teacher_auth.checkSession, require('./teacher/class'));


router.use("*", function (req, res) {
    res.status(404).json({ msg: "404 are you lost?" });
});

module.exports = router;