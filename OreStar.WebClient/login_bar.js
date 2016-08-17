/**
 * Created by floris on 8/6/16.
 */

module.exports = (function () {

    function LoginBar() {}

    LoginBar.prototype.render = function () {
        return _template();
    };

    var _template = function () {
        return "" +
            "<div>" +
                "<a href='/#login'><button>Login</button></a>" +
            "</div>";
    };

    return LoginBar;

})();