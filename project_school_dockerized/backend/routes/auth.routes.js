module.exports = app => {
    var express = require('express');
    const authController = require("../controllers/auth.controller.js");
    var router = require("express").Router();

    router.post('/', authController.handleLogin);

    app.use(express.json())
    app.use('/auth', router);
}