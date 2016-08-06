/**
 * Created by floris on 8/6/16.
 */

const PORT = 44300;
const Router = require("./router");
const clientRouteTable = require("./client_route_table");

module.exports = (function () {

    function WebServer(express) {
        this._express = express;
        this._expressApp = express();
    }

    var _registerRoutingTable = function (routeTable) {
        var router = new Router(this._express);
        router.registerRoutes(routeTable.routes);
        this._expressApp.use(routeTable.routePrefix, router.getExpressRouter());
    };

    WebServer.prototype.startListening = function () {
        this._expressApp.listen(PORT, function () {
            console.log("Listening on port " + PORT);
        });
    };

    return WebServer;

})();