/**
 * Created by floris on 8/6/16.
 */

const ClientController = require("./client_controller");

module.exports = {
    initialize: function (path) {
        this._path = path;
        this._clientController = new ClientController();
    },
    getController: function () {
        return this._clientController;
    },
    getContentDirectory: function () {
        return this._path.join(__dirname, 'content');
    }
};