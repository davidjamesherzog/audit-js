var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var auditModel = new Schema({
    requestor: {type: String},
    application: {type: String},
    serverName: {type: String},
    category: {type: String},
    subCategory: {type: String},
    appServerId: {type: String},
    appServerHost: {type: String},
    createdDate: { type: Date, default: Date.now },
    message: {type: String}
});

module.exports = mongoose.model('Audit', auditModel);
