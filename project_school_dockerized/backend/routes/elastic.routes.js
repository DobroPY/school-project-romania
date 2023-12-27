module.exports = app => {
    var express = require('express');
    const elasticController = require("../controllers/elastic.controller.js");
    var router = require("express").Router();

    router.get('/indexTeacher', elasticController.createIndexTeacher);

    router.get('/getTeacher', elasticController.indexDataTeacher);

    router.delete('/deleteTeacher', elasticController.deleteDataTeacher);

    router.get('/indexStudent', elasticController.createIndexStudent);

    router.get('/getStudent', elasticController.indexDataStudent);

    router.delete('/deleteStudent', elasticController.deleteDataStudent);

    router.get('/indexReview', elasticController.createIndexReview);

    router.get('/getReview', elasticController.indexDataReview);

    router.delete('/deleteReview', elasticController.deleteDataReview);

    router.get('/indexDirector', elasticController.createIndexDirector);

    router.get('/getDirector', elasticController.indexDataDirector);

    router.delete('/deleteDirector', elasticController.deleteDataDirector);

    router.get('/indexClassroom', elasticController.createIndexClassroom);

    router.get('/getClassroom', elasticController.indexDataClassroom);

    router.delete('/deleteClassroom', elasticController.deleteDataClassroom);

    router.get('/indexCalendar', elasticController.createIndexCalendar);

    router.get('/getCalendar', elasticController.indexDataCalendar);

    router.delete('/deleteCalendar', elasticController.deleteDataCalendar);

    router.get('/indexModules', elasticController.createIndexModules);

    router.get('/getModules', elasticController.indexDataModules);

    router.delete('/deleteModules', elasticController.deleteDataModules);

    router.get('/indexGrades', elasticController.createIndexGrades);

    router.get('/getGrades', elasticController.indexDataGrades);

    router.delete('/deleteGrades', elasticController.deleteDataGrades);

    router.get('/indexAbsences', elasticController.createIndexAbsences);

    router.get('/getAbsences', elasticController.indexDataAbsences);

    router.delete('/deleteAbsences', elasticController.deleteDataAbsences);

    app.use(express.json())
    app.use('/elastic', router);
}