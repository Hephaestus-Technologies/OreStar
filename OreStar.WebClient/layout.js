/**
 * Created by floris on 8/6/16.
 */

module.exports = (function () {

    function Layout() {}

    Layout.prototype.showLoginBar = function (loginBar) {
        this._loginBar = loginBar.render();
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
          "<body>" +
              this._loginBar +
              "" +
              this._content +
          "</body>" +
          "</html>";
    };

    return Layout;

})();