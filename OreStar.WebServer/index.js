/**
 * Created by floris on 8/4/16.
 */

const WebServer = require("./WebServer");

module.exports = {
    initialize: function (express) {
        var webServer = new WebServer(express);
        webServer.startListening();
    }
};