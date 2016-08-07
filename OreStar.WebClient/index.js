/**
 * Created by floris on 8/6/16.
 */

const ClientController = require("./client_controller");

module.exports = {
    initialize: function () {
        this._clientController = new ClientController();
    },
    getController: function () {
        return this._clientController;
    }
};