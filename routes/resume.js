const express = require('express');
const router = express.Router();
const ResumeController = require('../controller/resume-controller');


router.get('/resume',(req, res, next)=>{
    const resumeData = ResumeController.getData();
    res.render('resume', resumeData);
});

module.exports = router;