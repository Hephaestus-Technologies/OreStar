/**
 * Created by floris on 8/4/16.
 */

const WebServer = require("./web_server");

module.exports = {
    initialize: function (express, session, webClient) {
        var webServer = new WebServer(express, session);
        webServer.registerClient(webClient);
        webServer.startListening();
    }
};