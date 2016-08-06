/**
 * Created by floris on 8/6/16.
 */

const Verbs = require("./verbs.json");

module.exports = (function () {

    function Router(express) {
        this._router = express.Router();
    }

    Router.prototype.registerRoutes = function (routes) {
        for (var i = 0; i < routes.length; i++) {
            var route = routes[i];
            _registerRoute.call(this, route);
        }
    };

    var _registerRoute = function (route) {
        if (route.verb === Verbs.GET) _registerGet.call(this, route);
        else if (route.verb === Verbs.POST) _registerPost.call(this, route);
    };

    var _registerGet = function (route) {
        this._router.get('/' + route.uri, route.callback);
    };

    var _registerPost = function (route) {
        this._router.post('/' + route.uri, route.callback);
    };

    Router.prototype.getExpressRouter = function () {
        return this._router;
    };

    return Router;

})();