var q = require('Q'),
    http = require('http'),
    url = require("url"),
    respMessage = require('../models/responseModel'),
    messageFactory = require('../factories/messageFactory.js');


module.exports = function (uri) {

    var deferred = q.defer();

    if (uri == null) {
        deferred.reject(new respMessage(messageFactory.response.noUrl));
        return deferred.promise;
    }


    if (typeof uri == "string" && uri.indexOf('//') == -1) {
        uri = "http://" + uri;
    }

    uri = url.parse(uri);

    var request = http.request({host: uri.hostname, port: uri.port}, function (res) {

        var message = new respMessage(messageFactory.response.success);

        res.on('data', function (chunk) {
            message.body += chunk;
        });

        res.on('end', function () {
            deferred.resolve(message);
        });

    });

    request.on("error", function (err) {
        deferred.reject(new respMessage(err));
    });

    request.setTimeout(2000, function () {
        deferred.reject(new respMessage(messageFactory.response.timeout));
    });

    request.end();

    return deferred.promise;
};