/**
 * Created by floris on 8/6/16.
 */

const Layout = require("./layout");
const IndexView = require("./index_view");
const LoginBar = require("./login_bar");

module.exports = (function () {

    function ClientController() {}

    ClientController.prototype.getIndexPage = function (session) {
        var layout = new Layout();
        layout.showLoginBar(new LoginBar());
        layout.showContent(new IndexView());
        return layout.render();
    };

    ClientController.prototype.getLoginPage = function (session) {

    };

    return ClientController;

})();