/**
 * Created by floris on 8/4/16.
 */

const WebServer = require("./web_server");

module.exports = {
    withBaseServer: function (baseServer) {
        this._baseServer = baseServer;
        return this;
    },
    withSessionManager: function (sessionManager) {
        this._sessionManager = sessionManager;
        return this;
    },
    withClient: function (client) {
        this._client = client;
        return this;
    },
    initialize: function () {
        var webServer = new WebServer(this._baseServer, this._sessionManager);
        webServer.registerClient(this._client);
        webServer.startListening();
    }
};