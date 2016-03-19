/**
 * @factory - messages for http response / console
 * @type {{response}} - response messages for http server
 */

module.exports = function(){

    var responseMessages = {
        fail : 'fail',
        timeout: 'request timeout',
        success: 'success',
        noUrl: 'no url param'
    };

    return {
        response: responseMessages
    }

}();