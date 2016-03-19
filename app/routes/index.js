var services = require('../services/index');

/**
 *
 * @param app - express instance
 * @function - create routes for app
 */

module.exports = function(app) {
    app.get('/', function (req, res) {

        services.fetchService(req.query.uri).then(function (data) {
            res.json(data);
        }).fail(function (err) {
            res.json(err);
        })
    });
}