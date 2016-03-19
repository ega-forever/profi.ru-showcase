var express = require('express'),
    app = express(),
    request = require('request'),
    messagesFactory = require('../../app/factories/messageFactory.js'),
    messagesModel = require('../../app/models/responseModel.js');


var server = app.listen(9000, function () {
    console.log('test port');
});

app.get('/', function (req, res) {

    setTimeout(function () {
        res.send('!!');
    }, 2500)


});


describe('demo app test suite', function () {
    it("should respond with long run error", function (done) {
        request("http://localhost:3000/?uri=localhost:9000", function (error, response, body) {
            var obj = eval('(' + body + ')');
            expect(obj).toEqual(new messagesModel(messagesFactory.response.timeout));
            server.close();
            done();
        });
    });



    it("should respond with general website", function (done) {
        request("http://localhost:3000/?uri=google.com", function (error, response, body) {
            var obj = eval('(' + body + ')');
            expect(obj.status).toEqual(messagesFactory.response.success);
            done();
        });
    });




    it("should respond with error on non existable website", function (done) {
        request("http://localhost:3000/?uri=google46.com", function (error, response, body) {
            var obj = eval('(' + body + ')');
            expect(typeof obj.status).toEqual("object");
            done();
        });
    });



    it("should respond with correct status on empty param", function (done) {
        request("http://localhost:3000/", function (error, response, body) {
            var obj = eval('(' + body + ')');
            expect(typeof obj.status).toEqual(messagesFactory.response.noUrl);
            done();
        });
    });

});