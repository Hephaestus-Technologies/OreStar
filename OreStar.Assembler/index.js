/**
 * Created by floris on 8/4/16.
 */

const express = require("express");
const session = require("express-session");
const path = require("path");

module.exports = {

    assembleApp: function() {

        var webClient = require("../OreStar.WebClient");
        webClient.initialize(path);

        var webServer = require("../OreStar.WebServer");
        webServer
            .withBaseServer(express)
            .withSessionManager(session)
            .withClient(webClient)
            .initialize();

    }

};