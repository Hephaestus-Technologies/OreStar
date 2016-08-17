/**
 * Created by floris on 8/6/16.
 */

const PORT = 44300;
const Router = require("./router");
const clientRouteTable = require("./client_route_table");

module.exports = (function () {

    function WebServer(baseServer, session) {
        this._baseServer = baseServer;
        this._serverApp = baseServer();
        var sessionConfiguration = session({
            saveUninitialized: false,
            resave: false,
            secret: "this is some random string of characters"
        });
        this._serverApp.use(sessionConfiguration);
    }

    WebServer.prototype.registerClient = function (client) {
        var routeTable = clientRouteTable.create(client.getController());
        this._serverApp.use(this._baseServer.static(client.getContentDirectory()));
        _registerRoutingTable.call(this, routeTable);
    };

    var _registerRoutingTable = function (routeTable) {
        var router = new Router(this._baseServer);
        router.registerRoutes(routeTable.routes);
        this._serverApp.use(routeTable.routePrefix, router.getExpressRouter());
    };

    WebServer.prototype.startListening = function () {
        this._serverApp.listen(PORT, function () {
            console.log("Listening on port " + PORT);
        });
    };

    return WebServer;

})();