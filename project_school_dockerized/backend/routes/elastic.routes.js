module.exports = app => {
    var express = require('express');
    const elasticController = require("../controllers/elastic.controller.js");
    var router = require("express").Router();

    router.get('/gradesIndex', elasticController.getIndex);

    router.get('/index', elasticController.createIndex);

    router.get('/', elasticController.indexData);

    router.delete('/', elasticController.deleteData);

    app.use(express.json())
    app.use('/elastic', router);
}