/**
 * Created by floris on 8/6/16.
 */

module.exports = (function () {

    function Router(expressApp, routePrefix) {
        this._router = expressApp.Router();
        expressApp.use(routePrefix, this._router);
    }

    Router.prototype.registerGet = function (route, callback) {
        this._router.get(route, callback);
    };

    Router.prototype.registerPost = function (route, callback) {
        this._router.post(route, callback);
    };

    return Router;

})();