module.exports = app => {
    var express = require('express');
    const refreshTokenController = require("../controllers/refreshToken.controller.js");
    var router = require("express").Router();

    router.get('/', refreshTokenController.handleRefreshToken);

    app.use(express.json())
    app.use('/refresh', router);
}