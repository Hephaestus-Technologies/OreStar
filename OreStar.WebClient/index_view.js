/**
 * Created by floris on 8/6/16.
 */

module.exports = (function () {

    function IndexView() {}

    IndexView.prototype.render = function () {
        return _template();
    };

    const _template = function () {
        return "";
    };

    return IndexView;

})();