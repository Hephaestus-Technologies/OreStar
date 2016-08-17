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
          "<html>"                                                                                                     +
          _renderHead()                                                                                                +
          _renderBody.call(this)                                                                                       +
        "</html>";
    };

    var _renderHead = function () {
        return "" +
            "<head>"                                                                                                   +
                "<title>Ore Star - Eve Online Mining Companion</title>"                                                +
                "<link rel='stylesheet' href='./index.css'/>"                                                          +
                "<script"                                                                                              +
                "src='ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js'>"                                      +
                "</script>"                                                                                            +
            "</head>";
    };

    var _renderBody = function () {
        return "" +
            "<body>"                                                                                                   +
                _renderHeader.call(this)                                                                               +
                _renderContent.call(this)                                                                              +
                _renderFooter.call(this)                                                                               +
            "</body>";
    };

    var _renderHeader = function () {
        return "" +
            "<div id='main-header'>"                                                                                   +
                "<span id='logo'><img src='./MiningLogo.jpg'></span>"                                                  +
                "<span id='menu-bar'>"                                                                                 +
                    this._menuBar                                                                                      +
                "</span>"                                                                                              +
            "</div>";
    };

    var _renderContent = function () {
        return "" +
            "<div id='main-content'>"                                                                                  +
                this._content                                                                                          +
            "</div>";
    };

    var _renderFooter = function () {
        return "<div id='main-footer'>"                                                                                +
            this._footer                                                                                               +
            "</div>";
    };

    return Layout;

})();