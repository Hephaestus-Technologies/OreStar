/**
 * Created by floris on 8/6/16.
 */

module.exports = (function () {

    function Layout() {}

    Layout.prototype.showMenuBar = function (menuBar) {
        this._menuBar = menuBar.render();
    };

    Layout.prototype.showContent = function (contentView) {
        this._content = contentView.render();
    };

    Layout.prototype.render = function () {
      return _template.call(this);
    };

    var _template = function () {
      return "" +
        "<html>" +
            "<head>" +
                "<link rel='stylesheet' type='text/css' href='./index.css'/>" +
            "</head>" +
            "<body>" +
                "<div id='main-header'>" +
                    "<span id='logo'><img src='./MiningLogo.jpg'></span>" +
                    "<span id='menu-bar'>" +
                        this._menuBar +
                    "</span>" +
                "</div>" +
                this._content +
            "</body>" +
        "</html>";
    };

    return Layout;

})();