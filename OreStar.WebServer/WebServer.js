/**
 * Created by floris on 8/6/16.
 */

const PORT = 44300;
const Router = require("./Router");

module.exports = (function () {

    function WebServer(expressApp) {
        this._expressApp = expressApp();
    }

    WebServer.prototype.CreateRouter = function (routePrefix) {
        return new Router(this._expressApp, routePrefix);
    };

    WebServer.prototype.startListening = function () {
        this._expressApp.listen(PORT, function () {
            console.log("Listening on port " + PORT);
        });
    };

    return WebServer;

})();