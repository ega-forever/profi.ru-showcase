/**
 * @model - model for http response
 * @param status - message
 * @param body - response body
 */

module.exports = function (status, body) {
    this.status = status;
    this.body = body == null ? "" : body;
};