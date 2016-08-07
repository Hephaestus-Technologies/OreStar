/**
 * Created by floris on 8/6/16.
 */

const Verbs = require("./verbs.json");

module.exports = {
    create: function (controller) {
        return {
            routePrefix: "",
            routes: [
                { verb: Verbs.GET, uri: "", callback: controller.getIndexPage },
                { verb: Verbs.GET, uri: "login", callback: controller.getLoginPage }
            ]
        }
    }
};