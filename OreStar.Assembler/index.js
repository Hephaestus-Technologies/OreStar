/**
 * Created by floris on 8/4/16.
 */

var express = require("express");

module.exports = {

    assembleApp: function() {

        var webServer = require("../OreStar.WebServer");
        webServer.initialize(express);

    }

};