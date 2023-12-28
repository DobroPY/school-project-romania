module.exports = app => {
    var express = require('express');
    const elasticController = require("../controllers/elastic.controller.js");
    var router = require("express").Router();

    router.get('/indexTeachers', elasticController.createIndexTeacher);

    router.get('/getTeachers', elasticController.indexDataTeacher);

    router.delete('/deleteTeachers', elasticController.deleteDataTeacher);

    router.get('/indexStudents', elasticController.createIndexStudent);

    router.get('/getStudents', elasticController.indexDataStudent);

    router.delete('/deleteStudents', elasticController.deleteDataStudent);

    router.get('/indexReviews', elasticController.createIndexReview);

    router.get('/getReviews', elasticController.indexDataReview);

    router.delete('/deleteReviews', elasticController.deleteDataReview);

    router.get('/indexDirectors', elasticController.createIndexDirector);

    router.get('/getDirectors', elasticController.indexDataDirector);

    router.delete('/deleteDirectors', elasticController.deleteDataDirector);

    router.get('/indexClassrooms', elasticController.createIndexClassroom);

    router.get('/getClassrooms', elasticController.indexDataClassroom);

    router.delete('/deleteClassrooms', elasticController.deleteDataClassroom);

    router.get('/indexCalendars', elasticController.createIndexCalendar);

    router.get('/getCalendars', elasticController.indexDataCalendar);

    router.delete('/deleteCalendars', elasticController.deleteDataCalendar);

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