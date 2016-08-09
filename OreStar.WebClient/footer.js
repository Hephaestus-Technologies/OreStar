/**
 * Created by floris on 8/7/16.
 */

module.exports = (function () {

    function Footer() {}

    Footer.prototype.render = function () {
      return  "" +
            _renderCompanyLogo() +
            _renderFollowUs() +
            _renderAbout()
    };

    var _renderCompanyLogo = function () {
        return "" +
            "<span id='company-link'>"                                                                                 +
                _renderAnchor(_companyLink)                                                                            +
            "</span>";
    };

    var _companyLink = {
        link: "http://hephaestus-technologies.com",
        imageUri: "./HephaestusLogo.png"
    };

    var _renderFollowUs = function () {
        return "" +
            "<span id='follow-us'>"                                                                                    +
                "<span>"                                                                                               +
                    _renderAnchor(_faceBookLink)                                                                       +
                    _renderAnchor(_githubLink)                                                                         +
                "</span>"                                                                                              +
            "</span>";
    };

    var _faceBookLink = {
        link: "http://facebook.com/orestarmining",
        imageUri: "./square-facebook-128.png"
    };
    var _githubLink = {
        link: "https://github.com/hephaestus-technologies/OreStar",
        imageUri: "./GitHub-Mark-120px-plus.png"
    };

    var _renderAnchor = function (anchor) {
        return "" +
            "<a href='" + anchor.link + "' target='_blank'>"                                                           +
                "<img src='" + anchor.imageUri +"'>"                                                                   +
            "</a>";
    };

    var _renderAbout = function () {
        return "" +
            "<span id='about'>"                                                                                        +
                "<a href='https://orestar.org/about' target='_blank'>"                                                 +
                    "<button>About</button>"                                                                           +
                "</a>"                                                                                                 +
            "</span>";
    };

    return Footer;

})();