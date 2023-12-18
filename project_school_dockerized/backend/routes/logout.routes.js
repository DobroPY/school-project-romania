module.exports = app => {
    var express = require('express');
    const logoutController = require("../controllers/logout.controller.js");
    var router = require("express").Router();

    router.get('/', logoutController.handleLogout);

    app.use(express.json())
    app.use('/logout', router);
}