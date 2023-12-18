module.exports = app => {
    var express = require('express');
    const authController = require("../controllers/auth.controller.js");
    var router = require("express").Router();

    console.log('-----------------1');
    router.post('/', authController.handleLogin);

    console.log('-----------------2');

    app.use(express.json())
    app.use('/auth', router);
}