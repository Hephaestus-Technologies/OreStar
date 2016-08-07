/**
 * Created by floris on 8/4/16.
 */

const express = require("express");
const session = require("express-session");
const path = require("path");

module.exports = {

    assembleApp: function() {

        var client = require("../OreStar.WebClient");
        client.initialize(path);

        var webServer = require("../OreStar.WebServer");
        webServer.initialize(express, session, client);

    }

};