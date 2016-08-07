/**
 * Created by floris on 8/4/16.
 */

const express = require("express");
const session = require("express-session");

module.exports = {

    assembleApp: function() {

        var client = require("../OreStar.WebClient");
        client.initialize();

        var webServer = require("../OreStar.WebServer");
        webServer.initialize(express, session, client);

    }

};