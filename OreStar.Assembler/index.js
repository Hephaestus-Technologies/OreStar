/**
 * Created by floris on 8/4/16.
 */

var express = require("express");

module.exports = (function () {

    function Assembler() {
        var webServer = require("../OreStar.WebServer");
        webServer.initialize(express);
    }

    return Assembler;

})();