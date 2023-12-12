module.exports = app => {
    var express = require('express');
    const registerController = require("../controllers/register.controller.js");
    var router = require("express").Router();

    router.post('/', registerController.handleNewUser);

    app.use(express.json())
    app.use('/register', router);
}