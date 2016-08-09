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

    Layout.prototype.showFooter = function (footer) {
        this._footer = footer.render();
    };

    Layout.prototype.render = function () {
      return _template.call(this);
    };

    var _template = function () {
      return "" +
        "<html>"                                                                            +
            "<title>Ore Star - Eve Online Mining Companion</title>"                         +
            "<head>"                                                                        +
                "<link rel='stylesheet' href='./index.css'/>"                               +
            "</head>"                                                                       +
            "<body>"                                                                        +
                "<div id='main-header'>"                                                    +
                    "<span id='logo'><img src='./MiningLogo.jpg'></span>"                   +
                    "<span id='menu-bar'>"                                                  +
                        this._menuBar                                                       +
                    "</span>"                                                               +
                "</div>"                                                                    +
                this._content                                                               +
                "<div id='main-footer'>"                                                    +
                    this._footer                                                            +
                "</div>"                                                                    +
            "</body>"                                                                       +
        "</html>";
    };

    return Layout;

})();